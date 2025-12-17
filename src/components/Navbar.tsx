import { Search, Home, Users, Briefcase, MessageSquare, Bell, Grid3X3, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { companies } from "@/data/companies";

interface NavbarProps {
  selectedCompany?: string | null;
  onCompanySelect?: (companyId: string | null) => void;
}

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Network" },
  { icon: Briefcase, label: "Jobs" },
  { icon: MessageSquare, label: "Messaging" },
  { icon: Bell, label: "Notifications" },
];

export const Navbar = ({ selectedCompany, onCompanySelect }: NavbarProps) => {
  const currentCompany = companies.find((c) => c.id === selectedCompany);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[1128px] mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Left section - Logo and Search */}
        <div className="flex items-center gap-2">
          <div className="w-[34px] h-[34px] bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">in</span>
          </div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-[280px] pl-9 h-[34px] bg-secondary border-none text-sm"
            />
          </div>
        </div>

        {/* Center/Right section - Navigation */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center min-w-[80px] h-[52px] px-2 linkedin-hover ${
                item.active
                  ? "text-foreground border-b-2 border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-0.5 hidden md:block">{item.label}</span>
            </button>
          ))}

          {/* Company selector dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex flex-col items-center justify-center min-w-[100px] h-[52px] px-2 linkedin-hover text-muted-foreground hover:text-foreground border-l border-border">
                {currentCompany ? (
                  <Avatar className="h-6 w-6 bg-card">
                    <AvatarImage src={currentCompany.logo} className="object-contain p-0.5" />
                    <AvatarFallback className="text-[8px]">{currentCompany.initials}</AvatarFallback>
                  </Avatar>
                ) : (
                  <Grid3X3 className="h-5 w-5" />
                )}
                <span className="text-xs mt-0.5 hidden md:flex items-center gap-0.5">
                  {currentCompany ? currentCompany.name.split(" ")[0] : "Companies"} <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem
                onClick={() => onCompanySelect?.(null)}
                className={!selectedCompany ? "bg-accent" : ""}
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                All Companies
              </DropdownMenuItem>
              {companies.map((company) => (
                <DropdownMenuItem
                  key={company.id}
                  onClick={() => onCompanySelect?.(company.id)}
                  className={selectedCompany === company.id ? "bg-accent" : ""}
                >
                  <Avatar className="h-5 w-5 mr-2 bg-card">
                    <AvatarImage src={company.logo} className="object-contain p-0.5" />
                    <AvatarFallback className="text-[8px]">{company.initials}</AvatarFallback>
                  </Avatar>
                  {company.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile dropdown */}
          <button className="flex flex-col items-center justify-center min-w-[80px] h-[52px] px-2 linkedin-hover text-muted-foreground hover:text-foreground">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-0.5 hidden md:flex items-center gap-0.5">
              Me <span className="text-[10px]">▼</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
