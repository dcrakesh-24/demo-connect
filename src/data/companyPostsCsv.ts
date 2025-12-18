import { useEffect, useState } from "react";
import type { CompanyPost } from "@/data/companies";

type LoadState =
  | { status: "idle" | "loading"; posts: CompanyPost[]; error: null }
  | { status: "loaded"; posts: CompanyPost[]; error: null }
  | { status: "error"; posts: CompanyPost[]; error: string };

let postsCache: CompanyPost[] | null = null;
let postsPromise: Promise<CompanyPost[]> | null = null;

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
    // ignore completely empty trailing row
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

function toNumber(value: string, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function toBool(value: string) {
  const v = value.trim().toLowerCase();
  if (v === "true" || v === "1" || v === "yes" || v === "y") return true;
  if (v === "false" || v === "0" || v === "no" || v === "n") return false;
  return false;
}

function decodeText(value: string) {
  return value.replaceAll("\\n", "\n");
}

export async function loadCompanyPostsFromCsv(csvUrl = "/companyPosts.csv"): Promise<CompanyPost[]> {
  if (postsCache) return postsCache;
  if (postsPromise) return postsPromise;

  postsPromise = (async () => {
    const res = await fetch(csvUrl, { headers: { "Accept": "text/csv" } });
    if (!res.ok) {
      throw new Error(`Failed to load CSV (${res.status})`);
    }
    const text = await res.text();
    const rows = parseCsv(text).filter((r) => r.some((c) => c.trim() !== ""));
    if (rows.length < 2) return [];

    const header = rows[0].map((h) => h.trim());
    const idx = (name: string) => header.findIndex((h) => h.toLowerCase() === name.toLowerCase());

    const companyIdIdx = idx("companyId");
    const timeAgoIdx = idx("timeAgo");
    const contentIdx = idx("content");
    const imageIdx = idx("image");
    const likesIdx = idx("likes");
    const commentsIdx = idx("comments");
    const repostsIdx = idx("reposts");
    const isSponsoredIdx = idx("isSponsored");

    const posts: CompanyPost[] = [];
    for (const r of rows.slice(1)) {
      const companyId = (r[companyIdIdx] ?? "").trim();
      if (!companyId) continue;

      posts.push({
        companyId,
        timeAgo: (r[timeAgoIdx] ?? "").trim(),
        content: decodeText(r[contentIdx] ?? ""),
        image: (r[imageIdx] ?? "").trim() || undefined,
        likes: toNumber((r[likesIdx] ?? "").trim(), 0),
        comments: toNumber((r[commentsIdx] ?? "").trim(), 0),
        reposts: toNumber((r[repostsIdx] ?? "").trim(), 0),
        isSponsored: isSponsoredIdx >= 0 ? toBool(r[isSponsoredIdx] ?? "") : undefined,
      });
    }

    postsCache = posts;
    return posts;
  })().finally(() => {
    postsPromise = null;
  });

  return postsPromise;
}

export function useCompanyPostsFromCsv(csvUrl = "/companyPosts.csv") {
  const [state, setState] = useState<LoadState>(() => {
    if (postsCache) return { status: "loaded", posts: postsCache, error: null };
    return { status: "idle", posts: [], error: null };
  });

  useEffect(() => {
    let cancelled = false;
    if (postsCache) return;

    setState((s) => (s.status === "loaded" ? s : { status: "loading", posts: [], error: null }));
    loadCompanyPostsFromCsv(csvUrl)
      .then((posts) => {
        if (cancelled) return;
        setState({ status: "loaded", posts, error: null });
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        const msg = e instanceof Error ? e.message : "Failed to load posts";
        setState({ status: "error", posts: [], error: msg });
      });

    return () => {
      cancelled = true;
    };
  }, [csvUrl]);

  return {
    posts: state.posts,
    loading: state.status === "idle" || state.status === "loading",
    error: state.status === "error" ? state.error : null,
  };
}


