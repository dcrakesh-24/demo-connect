import { Info, ChevronDown } from "lucide-react";

const newsItems = [
  { title: "The Big Ideas to shape 2026", timeAgo: "5h ago", readers: "3,605" },
  { title: "Tech salary growth cools", timeAgo: "6h ago", readers: "1,145" },
  { title: "Digantara raises $50 million", timeAgo: "4h ago", readers: "725" },
  { title: "NSE turnover falls sharply", timeAgo: "7h ago", readers: "399" },
  { title: "Luxury homebuyers go offbeat", timeAgo: "5h ago", readers: "272" },
];

export const NewsWidget = () => {
  return (
    <div className="linkedin-card p-3 animate-slide-in">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-[15px] text-foreground">LinkedIn News</h3>
        <div className="h-4 w-4 rounded bg-foreground/90 flex items-center justify-center">
          <Info className="h-3 w-3 text-card" strokeWidth={2.5} />
        </div>
      </div>
      
      <p className="text-[12px] text-muted-foreground mb-2">Top stories</p>

      <ul className="space-y-2">
        {newsItems.map((item, index) => (
          <li key={index}>
            <button className="text-left w-full py-1 linkedin-hover group">
              <p className="text-[13px] font-semibold text-foreground group-hover:underline line-clamp-2 leading-tight">
                {item.title}
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {item.timeAgo} • {item.readers} readers
              </p>
            </button>
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground mt-2 font-semibold w-full py-1">
        Show more <ChevronDown className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};
