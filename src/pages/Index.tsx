import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { CreatePost } from "@/components/CreatePost";
import { FeedPost } from "@/components/FeedPost";
import { NewsWidget } from "@/components/NewsWidget";
import { SuggestionsWidget } from "@/components/SuggestionsWidget";
import { Footer } from "@/components/Footer";
import { companies, companyPosts } from "@/data/companies";

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const feedItems = useMemo(() => {
    const filteredPosts = selectedCompany
      ? companyPosts.filter((post) => post.companyId === selectedCompany)
      : companyPosts;

    return filteredPosts.map((post) => {
      const company = companies.find((c) => c.id === post.companyId);
      return {
        author: {
          name: company?.name || "",
          title: company?.tagline || "",
          avatar: company?.logo || "",
          initials: company?.initials || "",
        },
        timeAgo: post.timeAgo,
        content: post.content,
        image: post.image,
        likes: post.likes,
        comments: post.comments,
        reposts: post.reposts,
        isSponsored: post.isSponsored,
        companyId: post.companyId,
      };
    });
  }, [selectedCompany]);

  const currentCompany = companies.find((c) => c.id === selectedCompany);

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        selectedCompany={selectedCompany} 
        onCompanySelect={setSelectedCompany} 
      />
      
      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[225px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block space-y-2">
            <ProfileCard />
          </aside>

          {/* Main Feed */}
          <section className="space-y-4">
            <CreatePost />
            
            {/* Filter indicator */}
            {selectedCompany && currentCompany && (
              <div className="linkedin-card p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Showing posts from:</span>
                  <span className="font-semibold text-foreground">{currentCompany.name}</span>
                </div>
                <button 
                  onClick={() => setSelectedCompany(null)}
                  className="text-sm text-primary hover:underline"
                >
                  Show all
                </button>
              </div>
            )}
            
            {/* Sort bar */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex-1 h-px bg-border" />
              <span>Sort by:</span>
              <button className="font-semibold text-foreground hover:text-primary flex items-center gap-1">
                Top <span className="text-[10px]">▼</span>
              </button>
            </div>

            {/* Posts */}
            {feedItems.map((post, index) => (
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
