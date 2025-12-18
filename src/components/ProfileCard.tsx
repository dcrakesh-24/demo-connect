import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Users } from "lucide-react";
import { companies, getCompanyById } from "@/data/companies";

type ProfileCardProps = {
  companyId?: string | null;
};

export const ProfileCard = ({ companyId }: ProfileCardProps) => {
  const company = (companyId ? getCompanyById(companyId) : undefined) ?? companies[0];
  const ceo = company.ceo;

  return (
    <div className="linkedin-card overflow-hidden animate-fade-in">
      {/* Cover image */}
      <div
        className="h-14 bg-cover bg-center"
        style={{ backgroundImage: `url(${company.coverImage})` }}
      />
      
      {/* Profile info */}
      <div className="px-3 pb-3 -mt-8">
        <Avatar className="h-16 w-16 border-2 border-card">
          <AvatarImage src={ceo.avatar} />
          <AvatarFallback>{ceo.initials}</AvatarFallback>
        </Avatar>
        
        <div className="mt-2">
          <h2 className="font-semibold text-foreground">{ceo.name}</h2>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {ceo.title}
          </p>
          <div className="inline-flex items-center gap-1 text-xs text-foreground mt-1">
            <Building2 className="h-3.5 w-3.5" />
            {company.name}
          </div>
        </div>
      </div>

      <div className="linkedin-divider" />

      {/* Company info */}
      <div className="p-3 text-xs space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            <span className="text-foreground font-medium">{company.followers.toLocaleString()}</span> followers
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span>
            <span className="text-foreground font-medium">{company.employees}</span> employees
          </span>
        </div>
      </div>

      <div className="linkedin-divider" />
    </div>
  );
};
