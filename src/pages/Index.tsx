import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { CompanyList } from "@/components/CompanyList";
import { CompanyDetails } from "@/components/CompanyDetails";
import { FeedPost } from "@/components/FeedPost";
import { Footer } from "@/components/Footer";
import { companies, companyPosts } from "@/data/companies";

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(companies[0]?.id || null);

  const currentCompany = companies.find((c) => c.id === selectedCompany);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Left Sidebar - Company List */}
          <aside className="space-y-4">
            <CompanyList 
              selectedCompany={selectedCompany} 
              onCompanySelect={setSelectedCompany} 
            />
            <div className="hidden lg:block">
              <Footer />
            </div>
          </aside>

          {/* Right Content - Company Details & Posts */}
          <section className="space-y-4">
            {currentCompany ? (
              <>
                <CompanyDetails company={currentCompany} />
                
                {/* Posts header */}
                <div className="linkedin-card p-4">
                  <h2 className="font-semibold text-foreground">Posts from {currentCompany.name}</h2>
                </div>
                
                {feedItems.length > 0 ? (
                  feedItems.map((post, index) => (
                    <FeedPost key={index} {...post} />
                  ))
                ) : (
                  <div className="linkedin-card p-8 text-center text-muted-foreground">
                    No posts available from this company.
                  </div>
                )}
              </>
            ) : (
              <div className="linkedin-card p-8 text-center text-muted-foreground">
                Select a company from the list to view details.
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
