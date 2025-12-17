import { Info, ChevronDown } from "lucide-react";

const newsItems = [
  { title: "Tech layoffs continue in 2024", readers: "12,847" },
  { title: "AI reshaping job market trends", readers: "8,234" },
  { title: "Remote work policies evolving", readers: "6,891" },
  { title: "Startup funding rebounds Q4", readers: "5,432" },
  { title: "New JavaScript framework gains traction", readers: "4,127" },
];

export const NewsWidget = () => {
  return (
    <div className="linkedin-card p-3 animate-slide-in">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-foreground">LinkedIn News</h3>
        <Info className="h-4 w-4 text-muted-foreground" />
      </div>

      <ul className="space-y-2">
        {newsItems.map((item, index) => (
          <li key={index}>
            <button className="text-left w-full p-1 -mx-1 rounded linkedin-hover group">
              <div className="flex gap-2">
                <span className="text-muted-foreground text-xs mt-1">•</span>
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.readers} readers
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-3 font-medium">
        Show more <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
};
