import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Company } from "@/data/companies";
import { Globe, Users, MapPin, Building2, ExternalLink } from "lucide-react";

interface CompanyDetailsProps {
  company: Company;
}

export const CompanyDetails = ({ company }: CompanyDetailsProps) => {
  return (
    <div className="linkedin-card overflow-hidden animate-fade-in">
      {/* Cover Image */}
      <div className="h-32 sm:h-40 relative">
        <img 
          src={company.coverImage} 
          alt={`${company.name} cover`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Company Info */}
      <div className="px-4 sm:px-6 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-10 relative">
          <Avatar className="h-20 w-20 border-4 border-card bg-card">
            <AvatarImage src={company.logo} className="object-contain p-2" />
            <AvatarFallback className="text-xl font-bold">{company.initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 pt-2 sm:pt-0">
            <h1 className="text-xl font-bold text-foreground">{company.name}</h1>
            <p className="text-sm text-muted-foreground">{company.tagline}</p>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              + Follow
            </Button>
            <Button size="sm" variant="outline">
              <ExternalLink className="h-4 w-4 mr-1" />
              Visit
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" />
            <span>{company.industry}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{company.headquarters}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{company.employees}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" />
            <a href={`https://${company.website}`} className="text-primary hover:underline">
              {company.website}
            </a>
          </div>
        </div>

        <p className="text-primary font-medium text-sm mt-3">
          {company.followers.toLocaleString()} followers
        </p>

        {/* About */}
        <div className="mt-4 pt-4 border-t border-border">
          <h3 className="font-semibold text-foreground mb-2">About</h3>
          <p className="text-sm text-muted-foreground">{company.about}</p>
        </div>
      </div>
    </div>
  );
};
