import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus } from "lucide-react";

const suggestions = [
  {
    name: "Sarah Chen",
    title: "Product Manager at Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    initials: "SC",
    mutual: 12,
  },
  {
    name: "Michael Park",
    title: "Senior Engineer at Meta",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    initials: "MP",
    mutual: 8,
  },
  {
    name: "Emily Rodriguez",
    title: "UX Designer at Apple",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    initials: "ER",
    mutual: 15,
  },
];

export const SuggestionsWidget = () => {
  return (
    <div className="linkedin-card p-3 animate-slide-in" style={{ animationDelay: "0.1s" }}>
      <h3 className="font-semibold text-foreground mb-3">Add to your feed</h3>

      <div className="space-y-3">
        {suggestions.map((person) => (
          <div key={person.name} className="flex gap-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-foreground hover:text-primary hover:underline cursor-pointer truncate">
                {person.name}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {person.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {person.mutual} mutual connections
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 rounded-full text-muted-foreground hover:text-foreground border-muted-foreground/50 hover:border-foreground hover:bg-transparent"
              >
                <Plus className="h-4 w-4 mr-1" />
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-3 font-medium">
        View all recommendations
      </button>
    </div>
  );
};
