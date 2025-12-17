import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { CreatePost } from "@/components/CreatePost";
import { FeedPost } from "@/components/FeedPost";
import { NewsWidget } from "@/components/NewsWidget";
import { SuggestionsWidget } from "@/components/SuggestionsWidget";
import { Footer } from "@/components/Footer";

const posts = [
  {
    author: {
      name: "Alex Thompson",
      title: "CEO at StartupXYZ | Building the future of AI | Forbes 30 Under 30",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      initials: "AT",
    },
    timeAgo: "2h",
    content: `🚀 Excited to announce that we've just closed our Series B funding round!\n\nAfter 3 years of building, we've raised $50M to continue our mission of making AI accessible to everyone.\n\nA huge thank you to our incredible team, investors, and customers who believed in us from day one.\n\nThe journey is just beginning! #startup #AI #funding`,
    likes: 2847,
    comments: 234,
    reposts: 89,
  },
  {
    author: {
      name: "Jessica Williams",
      title: "Engineering Manager at Microsoft | Tech Speaker | Mentor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      initials: "JW",
    },
    timeAgo: "5h",
    content: `Hot take: The best code is the code you don't write.\n\nAfter 15 years in software engineering, I've learned that simplicity always wins. Before adding a new feature, ask yourself:\n\n1. Does this solve a real problem?\n2. Is there a simpler solution?\n3. Will this be maintainable in 6 months?\n\nWhat's your approach to keeping codebases clean? 👇`,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    likes: 1523,
    comments: 187,
    reposts: 45,
  },
  {
    author: {
      name: "David Kim",
      title: "Senior Product Designer at Airbnb | Design Systems Enthusiast",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      initials: "DK",
    },
    timeAgo: "8h",
    content: `Design tip that changed my career:\n\nStop designing screens. Start designing systems.\n\nWhen you focus on building a cohesive design system, you:\n\n✅ Reduce inconsistencies\n✅ Speed up your workflow\n✅ Make collaboration easier\n✅ Create better user experiences\n\nThe best products feel unified because they ARE unified at their core.`,
    likes: 892,
    comments: 67,
    reposts: 23,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[225px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block space-y-2">
            <ProfileCard />
          </aside>

          {/* Main Feed */}
          <section className="space-y-4">
            <CreatePost />
            
            {/* Sort bar */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex-1 h-px bg-border" />
              <span>Sort by:</span>
              <button className="font-semibold text-foreground hover:text-primary flex items-center gap-1">
                Top <span className="text-[10px]">▼</span>
              </button>
            </div>

            {/* Posts */}
            {posts.map((post, index) => (
              <FeedPost key={index} {...post} />
            ))}
          </section>

          {/* Right Sidebar */}
          <aside className="hidden lg:block space-y-2">
            <NewsWidget />
            <SuggestionsWidget />
            <Footer />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
