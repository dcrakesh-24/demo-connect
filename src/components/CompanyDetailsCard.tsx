import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Globe, MapPin, Users } from "lucide-react";
import { companies, getCompanyById } from "@/data/companies";

type CompanyDetailsCardProps = {
  companyId?: string | null;
};

export const CompanyDetailsCard = ({ companyId }: CompanyDetailsCardProps) => {
  const company = (companyId ? getCompanyById(companyId) : undefined) ?? companies[0];

  return (
    <div className="linkedin-card overflow-hidden animate-slide-in">
      <div className="h-20 relative">
        <img
          src={company.coverImage}
          alt={`${company.name} cover`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 -mt-8">
        <div className="flex items-end gap-3">
          <Avatar className="h-16 w-16 border-2 border-card bg-card">
            <AvatarImage src={company.logo} className="object-contain p-2" />
            <AvatarFallback className="font-bold">{company.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <Link
              to={`/company/${company.id}`}
              className="font-semibold text-foreground hover:text-primary hover:underline truncate block"
            >
              {company.name}
            </Link>
            <p className="text-xs text-muted-foreground line-clamp-2">{company.tagline}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span className="truncate">{company.industry}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="truncate">{company.headquarters}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{company.employees} employees</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="h-4 w-4" />
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline truncate"
            >
              {company.website}
            </a>
          </div>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          <span className="text-foreground font-semibold">{company.followers.toLocaleString()}</span> followers
        </div>

        <p className="mt-3 text-sm text-muted-foreground line-clamp-4">{company.about}</p>
      </div>
    </div>
  );
};


