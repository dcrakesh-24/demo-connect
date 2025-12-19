import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Users, Bookmark, UsersRound, Newspaper, Calendar } from "lucide-react";
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

      {/* Stats */}
      <div className="p-3 text-xs">
        <div className="flex justify-between items-center linkedin-hover p-1 -mx-1 rounded cursor-pointer">
          <span className="text-muted-foreground">Profile viewers</span>
          <span className="text-primary font-semibold">52</span>
        </div>
        <div className="flex justify-between items-center linkedin-hover p-1 -mx-1 rounded cursor-pointer">
          <span className="text-muted-foreground">Post impressions</span>
          <span className="text-primary font-semibold">119</span>
        </div>
      </div>

      <div className="linkedin-divider" />

      {/* Quick Links */}
      <div className="p-3">
        <button className="flex items-center gap-2 text-xs text-muted-foreground linkedin-hover p-1 -mx-1 rounded w-full text-left">
          <Bookmark className="h-4 w-4" />
          <span>Saved items</span>
        </button>
        <button className="flex items-center gap-2 text-xs text-muted-foreground linkedin-hover p-1 -mx-1 rounded w-full text-left mt-1">
          <UsersRound className="h-4 w-4" />
          <span>Groups</span>
        </button>
        <button className="flex items-center gap-2 text-xs text-muted-foreground linkedin-hover p-1 -mx-1 rounded w-full text-left mt-1">
          <Newspaper className="h-4 w-4" />
          <span>Newsletters</span>
        </button>
        <button className="flex items-center gap-2 text-xs text-muted-foreground linkedin-hover p-1 -mx-1 rounded w-full text-left mt-1">
          <Calendar className="h-4 w-4" />
          <span>Events</span>
        </button>
      </div>
    </div>
  );
};
