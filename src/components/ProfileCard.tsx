import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="linkedin-card overflow-hidden animate-fade-in">
      {/* Cover image */}
      <div className="h-14 bg-gradient-to-r from-primary/20 to-primary/40" />
      
      {/* Profile info */}
      <div className="px-3 pb-3 -mt-8">
        <Avatar className="h-16 w-16 border-2 border-card">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="mt-2">
          <h2 className="font-semibold text-foreground hover:underline cursor-pointer">
            John Doe
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            Senior Software Engineer at Tech Company | React, TypeScript, Node.js
          </p>
        </div>
      </div>

      <div className="linkedin-divider" />

      {/* Stats */}
      <div className="p-3 text-xs">
        <div className="flex justify-between items-center linkedin-hover p-1 -mx-1 rounded cursor-pointer">
          <span className="text-muted-foreground">Profile viewers</span>
          <span className="text-primary font-semibold">142</span>
        </div>
        <div className="flex justify-between items-center linkedin-hover p-1 -mx-1 rounded cursor-pointer">
          <span className="text-muted-foreground">Post impressions</span>
          <span className="text-primary font-semibold">1,847</span>
        </div>
      </div>

      <div className="linkedin-divider" />

      {/* Saved items */}
      <div className="p-3">
        <button className="flex items-center gap-2 text-xs text-muted-foreground linkedin-hover p-1 -mx-1 rounded w-full">
          <Bookmark className="h-4 w-4" />
          <span>Saved items</span>
        </button>
      </div>
    </div>
  );
};
