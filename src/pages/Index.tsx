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
    console.log("🔍 Filtering - selectedCompany:", selectedCompany, "journeyStage:", journeyStage);
    console.log("📦 Total posts:", companyPosts.length);
    console.log("🎯 Ads by company:", Object.keys(adsByCompanyId).map(k => `${k}: ${adsByCompanyId[k]?.length || 0} ads`));
    
    const filteredPosts = selectedCompany
      ? companyPosts.filter((post) => post.companyId === selectedCompany)
      : companyPosts;

    console.log("📌 After company filter:", filteredPosts.length, "posts");

    // Always filter by stage (even while loading, ads will be empty so sponsored posts won't show)
    const stageFilteredPosts = filteredPosts.filter((post) => {
      if (!post.isSponsored) {
        console.log("✅ Regular post from", post.companyId, "- including");
        return true;
      }
      const ads = adsByCompanyId[post.companyId] ?? [];
      const hasMatchingAd = ads.some((a) => a.stage === journeyStage);
      console.log(`🎯 Sponsored post from ${post.companyId}:`, {
        adsCount: ads.length,
        adStages: ads.map(a => a.stage),
        journeyStage,
        hasMatchingAd
      });
      return hasMatchingAd;
    });

    console.log("✨ After stage filter:", stageFilteredPosts.length, "posts");

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
  }, [selectedCompany, journeyStage, companyPosts, adsByCompanyId]);

  const currentCompany = companies.find((c) => c.id === selectedCompany);
  const sidebarCompanyId = selectedCompany ?? feedItems[0]?.companyId ?? null;
  const sidebarCompany = companies.find((c) => c.id === sidebarCompanyId) ?? companies[0];
  const ceo = sidebarCompany.ceo;

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        selectedCompany={selectedCompany} 
        onCompanySelect={setSelectedCompany}
        selectedJourneyStage={journeyStage}
        onJourneyStageSelect={setJourneyStage}
        userAvatar={ceo.avatar}
        userInitials={ceo.initials}
      />
      
      <main className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[225px_555px_300px] gap-6 justify-center">
          {/* Left Sidebar */}
          <aside className="hidden lg:block space-y-2">
            <ProfileCard companyId={sidebarCompanyId} />
          </aside>

          {/* Main Feed */}
          <section className="space-y-4">
            <CreatePost userAvatar={ceo.avatar} userInitials={ceo.initials} />

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
              <FeedPost key={index} {...post} journeyStage={journeyStage} />
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
