import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  BlogArticleHeader,
  TableOfContents,
  BlogArticleContent,
  BlogArticleAd,
  BlogArticleFooter,
  ShareBar,
  ChatWidget,
  ProductDemoSection,
  ArticleHeader,
} from "@/components/landing/template4";
import { loadTemplate4Data, clearTemplate4Cache } from "@/data/landing/template4Csv";
import type { Template4Data } from "@/data/landing/template4";

/**
 * Landing Page Template 4
 * 
 * Blog/Article layout with sidebar navigation, main content, and advertisement sidebar.
 * All data, colors, logos, and text are configurable via template4-config.csv.
 * 
 * Data is loaded from CSV file for easy configuration.
 */
const Template4 = () => {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get('companyId') || undefined;
  const [data, setData] = useState<Template4Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear cache on mount to ensure fresh data from CSV
    clearTemplate4Cache(companyId);
    
    const loadData = async () => {
      try {
        // Force reload by clearing cache
        const loadedData = await loadTemplate4Data(companyId, true);
        setData(loadedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };
    
    loadData();
  }, [companyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-600">Error loading data: {error || "Unknown error"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <BlogArticleHeader data={data.header} />
      
      {/* Article Header - Title and Featured Image (Full Width) */}
      <section className="py-8">
        <ArticleHeader
          data={{
            publishedDate: data.content.publishedDate,
            title: data.content.title,
            author: data.content.author,
            authorLink: data.content.authorLink,
            readTime: data.content.readTime,
            featuredImage: data.content.featuredImage,
          }}
        />
      </section>

      {/* Main Content Area - Three Column Layout */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Table of Contents */}
          <aside className="lg:col-span-2 hidden lg:block">
            <TableOfContents items={data.tableOfContents} />
          </aside>

          {/* Main Article Content */}
          <div className="lg:col-span-7">
            <BlogArticleContent data={data.content} />
          </div>

          {/* Right Sidebar - Advertisement and Share */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="space-y-6">
                <BlogArticleAd data={data.ad} />
                <ShareBar links={data.shareLinks} />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Product Demo Section */}
      {data.productDemo && (
        <ProductDemoSection
          title={data.productDemo.title}
          heading={data.productDemo.heading}
          ctaButton={data.productDemo.ctaButton}
          colors={data.productDemo.colors}
        />
      )}

      {/* Footer */}
      <BlogArticleFooter data={data.footer} />

      {/* Chat Widget */}
      <ChatWidget data={data.chatWidget} />
    </div>
  );
};

export default Template4;

