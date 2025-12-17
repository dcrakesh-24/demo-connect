import { Search, Home, Users, Briefcase, MessageSquare, Bell, Grid3X3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Network" },
  { icon: Briefcase, label: "Jobs" },
  { icon: MessageSquare, label: "Messaging" },
  { icon: Bell, label: "Notifications" },
];

export const Navbar = () => {
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

          {/* Work dropdown */}
          <div className="hidden lg:flex flex-col items-center justify-center min-w-[60px] h-[52px] px-2 border-l border-border linkedin-hover text-muted-foreground hover:text-foreground cursor-pointer">
            <Grid3X3 className="h-5 w-5" />
            <span className="text-xs mt-0.5 flex items-center gap-0.5">
              Work <span className="text-[10px]">▼</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
