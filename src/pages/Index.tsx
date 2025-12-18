import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { CreatePost } from "@/components/CreatePost";
import { FeedPost } from "@/components/FeedPost";
import { NewsWidget } from "@/components/NewsWidget";
import { Footer } from "@/components/Footer";
import { companies } from "@/data/companies";
import type { JourneyStage } from "@/data/ads";
import { useCompanyPostsFromCsv } from "@/data/companyPostsCsv";
import { useAdsFromCsv } from "@/data/adsCsv";

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(() => companies[0]?.id ?? null);
  const [journeyStage, setJourneyStage] = useState<JourneyStage>("unware");
  const { posts: companyPosts, loading: postsLoading, error: postsError } = useCompanyPostsFromCsv();
  const { adsByCompanyId, loading: adsLoading, error: adsError } = useAdsFromCsv();

  const feedItems = useMemo(() => {
    const filteredPosts = selectedCompany
      ? companyPosts.filter((post) => post.companyId === selectedCompany)
      : companyPosts;

    const stageFilteredPosts = adsLoading
      ? filteredPosts
      : filteredPosts.filter((post) => {
          if (!post.isSponsored) return true;
          const ads = adsByCompanyId[post.companyId] ?? [];
          return ads.some((a) => a.stage === journeyStage);
        });

    return stageFilteredPosts.map((post) => {
      const company = companies.find((c) => c.id === post.companyId);
      const ads = adsByCompanyId[post.companyId] ?? [];
      const ad = post.isSponsored
        ? ads.find((a) => a.stage === journeyStage) ?? ads[0]
        : undefined;
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
        ad,
      };
    });
  }, [selectedCompany, journeyStage, companyPosts, adsByCompanyId, adsLoading]);

  const currentCompany = companies.find((c) => c.id === selectedCompany);
  const sidebarCompanyId = selectedCompany ?? feedItems[0]?.companyId ?? null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        selectedCompany={selectedCompany} 
        onCompanySelect={setSelectedCompany}
        selectedJourneyStage={journeyStage}
        onJourneyStageSelect={setJourneyStage}
      />
      
      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[225px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block space-y-2">
            <ProfileCard companyId={sidebarCompanyId} />
          </aside>

          {/* Main Feed */}
          <section className="space-y-4">
            <CreatePost />

            {postsLoading && (
              <div className="linkedin-card p-4 text-sm text-muted-foreground">
                Loading posts…
              </div>
            )}
            {postsError && (
              <div className="linkedin-card p-4 text-sm text-destructive">
                Failed to load posts from CSV: {postsError}
              </div>
            )}
            {adsLoading && (
              <div className="linkedin-card p-4 text-sm text-muted-foreground">
                Loading ads…
              </div>
            )}
            {adsError && (
              <div className="linkedin-card p-4 text-sm text-destructive">
                Failed to load ads from CSV: {adsError}
              </div>
            )}
            
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
            <Footer />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
