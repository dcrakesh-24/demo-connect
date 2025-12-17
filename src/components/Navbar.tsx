import { Search, Home } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Left section - Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">in</span>
          </div>
          <h1 className="text-lg font-semibold text-foreground hidden sm:block">Company Showcase</h1>
        </div>

        {/* Center - Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
            className="w-[300px] pl-9 h-[34px] bg-secondary border-none text-sm"
          />
        </div>

        {/* Right section - Home */}
        <button className="flex flex-col items-center justify-center min-w-[60px] h-[52px] px-2 linkedin-hover text-foreground border-b-2 border-foreground">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-0.5 hidden sm:block">Home</span>
        </button>
      </div>
    </nav>
  );
};
