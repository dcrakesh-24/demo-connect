import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { companies, Company } from "@/data/companies";
import { Building2 } from "lucide-react";

interface CompanyListProps {
  selectedCompany: string | null;
  onCompanySelect: (companyId: string | null) => void;
}

export const CompanyList = ({ selectedCompany, onCompanySelect }: CompanyListProps) => {
  return (
    <div className="linkedin-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Companies
        </h2>
      </div>
      
      <div className="divide-y divide-border">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => onCompanySelect(company.id)}
            className={`w-full p-3 flex items-center gap-3 text-left transition-colors hover:bg-accent/50 ${
              selectedCompany === company.id ? "bg-accent" : ""
            }`}
          >
            <Avatar className="h-10 w-10 bg-card border border-border">
              <AvatarImage src={company.logo} className="object-contain p-1" />
              <AvatarFallback className="text-xs">{company.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground truncate">{company.name}</p>
              <p className="text-xs text-muted-foreground truncate">{company.industry}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
