import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { companies } from "@/data/companies";
import type { JourneyStage } from "@/data/ads";

interface NavbarProps {
  selectedCompany?: string | null;
  onCompanySelect?: (companyId: string | null) => void;
  selectedJourneyStage?: JourneyStage | null;
  onJourneyStageSelect?: (stage: JourneyStage) => void;
}
type JourneyStageValue = JourneyStage;

const JOURNEY_STAGES: Array<{ value: JourneyStageValue; label: string }> = [
  { value: "unware", label: "Unware" },
  { value: "ware", label: "Ware" },
  { value: "consideration", label: "Consideration" },
  { value: "opputunerry", label: "Opputunerry" },
  { value: "customer", label: "Customer" },
];

const normalizeCompanyValue = (companyId: string | null | undefined) => companyId ?? "all";
const denormalizeCompanyValue = (value: string) => (value === "all" ? null : value);

const DEFAULT_STAGE: JourneyStage = "unware";
const normalizeStageValue = (stage: JourneyStage | null | undefined): JourneyStageValue => {
  const v = stage ?? DEFAULT_STAGE;
  return JOURNEY_STAGES.some((s) => s.value === v) ? v : DEFAULT_STAGE;
};

export const Navbar = ({
  selectedCompany,
  onCompanySelect,
  selectedJourneyStage,
  onJourneyStageSelect,
}: NavbarProps) => {
  const [logoError, setLogoError] = useState(false);
  const appliedCompanyValue = normalizeCompanyValue(selectedCompany);
  const appliedStageValue = normalizeStageValue(selectedJourneyStage);

  const [draftCompanyValue, setDraftCompanyValue] = useState<string>(appliedCompanyValue);
  const [draftStageValue, setDraftStageValue] = useState<JourneyStageValue>(appliedStageValue);

  useEffect(() => {
    setDraftCompanyValue(appliedCompanyValue);
  }, [appliedCompanyValue]);

  useEffect(() => {
    setDraftStageValue(appliedStageValue);
  }, [appliedStageValue]);

  const isDirty = useMemo(() => {
    return draftCompanyValue !== appliedCompanyValue || draftStageValue !== appliedStageValue;
  }, [draftCompanyValue, appliedCompanyValue, draftStageValue, appliedStageValue]);

  const handleApply = () => {
    onCompanySelect?.(denormalizeCompanyValue(draftCompanyValue));
    onJourneyStageSelect?.(draftStageValue);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          {!logoError ? (
            <img
              src="/assets/linkedin-logo.png"
              alt="Linkedin logo"
              className="h-9 w-9 rounded-[10px] object-cover"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold select-none tracking-tight">
              LM
            </div>
          )}
          <span className="text-[15px] font-semibold text-foreground whitespace-nowrap">
            Linkedin Mock Platform
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[180px]">
            <Select value={draftStageValue} onValueChange={(v) => setDraftStageValue(v as JourneyStageValue)}>
              <SelectTrigger className="h-9 bg-secondary border-0 shadow-none focus:ring-2 focus:ring-ring">
                <SelectValue placeholder="Journey stage" />
              </SelectTrigger>
              <SelectContent>
                {JOURNEY_STAGES.map((stage) => (
                  <SelectItem key={stage.value} value={stage.value}>
                    {stage.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-[220px]">
            <Select value={draftCompanyValue} onValueChange={setDraftCompanyValue}>
              <SelectTrigger className="h-9 bg-secondary border-0 shadow-none focus:ring-2 focus:ring-ring">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All companies</SelectItem>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button size="sm" className="h-9 rounded-full px-5" onClick={handleApply} disabled={!isDirty}>
            Apply
          </Button>
        </div>
      </div>
    </nav>
  );
};
