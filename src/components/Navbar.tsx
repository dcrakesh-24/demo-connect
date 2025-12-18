import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronDown } from "lucide-react";
import { companies } from "@/data/companies";
import type { JourneyStage } from "@/data/ads";

interface NavbarProps {
  selectedCompany?: string | null;
  onCompanySelect?: (companyId: string | null) => void;
  selectedJourneyStage?: JourneyStage | null;
  onJourneyStageSelect?: (stage: JourneyStage) => void;
  userAvatar?: string;
  userInitials?: string;
}
type JourneyStageValue = JourneyStage;

const JOURNEY_STAGES: Array<{ value: JourneyStageValue; label: string }> = [
  { value: "unware", label: "Unware" },
  { value: "ware", label: "Ware" },
  { value: "consideration", label: "Consideration" },
  { value: "opportunity", label: "Opportunity" },
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
  userAvatar,
  userInitials = "JD",
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

  const navItems = [
    { iconSrc: "/assets/home.png", label: "Home", active: true },
    { iconSrc: "/assets/users.png", label: "My Network" },
    { iconSrc: "/assets/icons-briefcase.png", label: "Jobs" },
    { iconSrc: "/assets/icons-chat-bubble.png", label: "Messaging", badge: 1 },
    { iconSrc: "/assets/icons-notification-bell.png", label: "Notifications", badge: 23 },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top Strip - Filters */}
      <div className="border-b border-border bg-black">
        <div className="max-w-[1128px] mx-auto px-4 h-[44px] flex items-center justify-center gap-3">
          <div className="w-[180px]">
            <Select value={draftStageValue} onValueChange={(v) => setDraftStageValue(v as JourneyStageValue)}>
              <SelectTrigger className="h-8 bg-card border-border text-xs rounded-full">
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

          <div className="w-[200px]">
            <Select value={draftCompanyValue} onValueChange={setDraftCompanyValue}>
              <SelectTrigger className="h-8 bg-card border-border text-xs rounded-full">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button size="sm" className="h-8 rounded-full px-4 text-xs bg-[#0A66C2] text-white hover:bg-[#004182]" onClick={handleApply} disabled={!isDirty}>
            Apply
          </Button>
        </div>
      </div>

      {/* Bottom Strip - LinkedIn-style Navigation */}
      <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Left - Logo and Search */}
        <div className="flex items-center gap-2">
          {!logoError ? (
            <img
              src="/assets/linkedin-logo.png"
              alt="LinkedIn"
              className="w-[34px] h-[30px] rounded"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="w-[34px] h-[30px] bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">in</span>
            </div>
          )}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-[280px] pl-9 h-[34px] bg-secondary border-none text-sm rounded-full"
            />
          </div>
        </div>

        {/* Center/Right - Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`relative flex flex-col items-center justify-center min-w-[80px] h-[52px] px-2 linkedin-hover ${
                item.active
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <img 
                  src={item.iconSrc} 
                  alt={item.label}
                  className="h-6 w-6 object-contain"
                />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-primary-foreground text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5 hidden md:block">{item.label}</span>
            </button>
          ))}

          {/* Profile Dropdown */}
          <button className="flex flex-col items-center justify-center min-w-[80px] h-[52px] px-2 linkedin-hover text-muted-foreground hover:text-foreground">
            <Avatar className="h-6 w-6">
              <AvatarImage src={userAvatar} />
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <span className="text-[11px] mt-0.5 hidden md:flex items-center gap-0.5">
              Me <ChevronDown className="h-3 w-3" />
            </span>
          </button>

          {/* For Business */}
          <button className="flex flex-col items-center justify-center min-w-[100px] h-[52px] px-2 linkedin-hover text-muted-foreground hover:text-foreground border-l border-border">
            <img 
              src="/assets/apps-grid.png" 
              alt="For Business"
              className="h-6 w-6 object-contain"
            />
            <span className="text-[11px] mt-0.5 hidden md:flex items-center gap-0.5">
              For Business <ChevronDown className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
