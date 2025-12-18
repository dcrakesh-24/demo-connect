import { useEffect, useMemo, useState } from "react";
import type { AdCreative, AdType, JourneyStage } from "@/data/ads";

type LoadState =
  | { status: "idle" | "loading"; ads: AdCreative[]; error: null }
  | { status: "loaded"; ads: AdCreative[]; error: null }
  | { status: "error"; ads: AdCreative[]; error: string };

let adsCache: AdCreative[] | null = null;
let adsPromise: Promise<AdCreative[]> | null = null;

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = "";
  };
  const pushRow = () => {
    if (row.length === 1 && row[0] === "") return;
    rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && ch === ",") {
      pushField();
      continue;
    }

    if (!inQuotes && (ch === "\n" || ch === "\r")) {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      pushField();
      pushRow();
      continue;
    }

    field += ch;
  }

  pushField();
  pushRow();
  return rows;
}

const toAdType = (value: string): AdType => {
  const v = value.trim().toLowerCase();
  return v === "carousel" ? "carousel" : "single";
};

const toStage = (value: string): JourneyStage => {
  const v = value.trim().toLowerCase();
  // keep strict but safe
  if (v === "unware" || v === "ware" || v === "consideration" || v === "opputunerry" || v === "customer") {
    return v;
  }
  return "unware";
};

const toImages = (value: string) =>
  value
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);

export async function loadAdsFromCsv(csvUrl = "/ads.csv"): Promise<AdCreative[]> {
  if (adsCache) return adsCache;
  if (adsPromise) return adsPromise;

  adsPromise = (async () => {
    const res = await fetch(csvUrl, { headers: { Accept: "text/csv" } });
    if (!res.ok) throw new Error(`Failed to load Ads CSV (${res.status})`);
    const text = await res.text();
    const rows = parseCsv(text).filter((r) => r.some((c) => c.trim() !== ""));
    if (rows.length < 2) return [];

    const header = rows[0].map((h) => h.trim());
    const idx = (name: string) => header.findIndex((h) => h.toLowerCase() === name.toLowerCase());

    const idIdx = idx("id");
    const companyIdIdx = idx("companyId");
    const stageIdx = idx("stage");
    const typeIdx = idx("type");
    const imagesIdx = idx("images");
    const landingUrlIdx = idx("landingUrl");
    const ctaLabelIdx = idx("ctaLabel");

    const ads: AdCreative[] = [];
    for (const r of rows.slice(1)) {
      const companyId = (r[companyIdIdx] ?? "").trim();
      const landingUrl = (r[landingUrlIdx] ?? "").trim();
      if (!companyId || !landingUrl) continue;

      const id = (r[idIdx] ?? "").trim() || `${companyId}-${r[stageIdx] ?? "unware"}-${ads.length + 1}`;
      ads.push({
        id,
        companyId,
        stage: toStage(r[stageIdx] ?? ""),
        type: toAdType(r[typeIdx] ?? ""),
        images: toImages(r[imagesIdx] ?? ""),
        landingUrl,
        ctaLabel: (r[ctaLabelIdx] ?? "").trim() || "Learn more",
      });
    }

    adsCache = ads;
    return ads;
  })().finally(() => {
    adsPromise = null;
  });

  return adsPromise;
}

export function useAdsFromCsv(csvUrl = "/ads.csv") {
  const [state, setState] = useState<LoadState>(() => {
    if (adsCache) return { status: "loaded", ads: adsCache, error: null };
    return { status: "idle", ads: [], error: null };
  });

  useEffect(() => {
    let cancelled = false;
    if (adsCache) return;

    setState((s) => (s.status === "loaded" ? s : { status: "loading", ads: [], error: null }));
    loadAdsFromCsv(csvUrl)
      .then((ads) => {
        if (cancelled) return;
        setState({ status: "loaded", ads, error: null });
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : "Failed to load ads";
        setState({ status: "error", ads: [], error: msg });
      });

    return () => {
      cancelled = true;
    };
  }, [csvUrl]);

  const adsByCompanyId = useMemo(() => {
    const map: Record<string, AdCreative[]> = {};
    for (const ad of state.ads) {
      (map[ad.companyId] ??= []).push(ad);
    }
    return map;
  }, [state.ads]);

  return {
    ads: state.ads,
    adsByCompanyId,
    loading: state.status === "idle" || state.status === "loading",
    error: state.status === "error" ? state.error : null,
  };
}


