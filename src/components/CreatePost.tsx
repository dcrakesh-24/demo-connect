import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Calendar, FileText, BarChart3 } from "lucide-react";

const postOptions = [
  { icon: Image, label: "Photo", color: "text-primary" },
  { icon: Calendar, label: "Event", color: "text-linkedin-gold" },
  { icon: FileText, label: "Write article", color: "text-destructive" },
];

export const CreatePost = () => {
  return (
    <div className="linkedin-card p-4 animate-fade-in">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <button className="flex-1 text-left px-4 py-3 rounded-full border border-border text-muted-foreground text-sm hover:bg-muted/50 transition-colors">
          Start a post
        </button>
      </div>

      <div className="flex justify-around mt-3 pt-1">
        {postOptions.map((option) => (
          <button
            key={option.label}
            className="flex items-center gap-2 px-3 py-2 rounded-md linkedin-hover text-sm font-medium text-muted-foreground"
          >
            <option.icon className={`h-5 w-5 ${option.color}`} />
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
