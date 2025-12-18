import { useEffect, useState } from "react";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CaseStudiesSection } from "@/components/landing/CaseStudiesSection";
import { MarketingSection } from "@/components/landing/MarketingSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { loadTemplate3Data, clearTemplate3Cache } from "@/data/landing/template3Csv";
import type { LandingPageData } from "@/data/landing/template1";

/**
 * Landing Page Template 3
 * 
 * This template is identical to Template1 in structure but uses its own CSV configuration.
 * All data, colors, logos, and text are configurable via template3-config.csv.
 * 
 * Data is loaded from CSV file for easy configuration.
 */
const Template3 = () => {
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear cache on mount to ensure fresh data from CSV
    clearTemplate3Cache();
    
    const loadData = async () => {
      try {
        // Force reload by clearing cache
        const loadedData = await loadTemplate3Data(true);
        setData(loadedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

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
      <LandingHeader logoUrl={data.logos?.header} colors={data.colors?.header} />
      
      <main>
        {/* Hero Section */}
        <HeroSection data={data.hero} colors={data.colors?.hero} />
        
        {/* Intro Section */}
        <IntroSection
          title={data.intro.title}
          description={data.intro.description}
          ctaButton={data.intro.ctaButton}
          colors={data.colors?.intro}
        />
        
        {/* Features Section */}
        <div id="features">
          <FeaturesSection
            title={data.features.title}
            items={data.features.items}
            ctaButton={data.features.ctaButton}
            colors={data.colors?.features}
          />
        </div>
        
        {/* Case Studies Section */}
        <div id="case-studies">
          <CaseStudiesSection
            title={data.caseStudies.title}
            items={data.caseStudies.items}
            colors={data.colors?.caseStudies}
          />
        </div>
        
        {/* Marketing Section */}
        <MarketingSection
          title={data.marketingSection.title}
          subtitle={data.marketingSection.subtitle}
          ctaButton={data.marketingSection.ctaButton}
          colors={data.colors?.marketing}
        />
        
        {/* Blog Section */}
        <div id="blog">
          <BlogSection
            title={data.blog.title}
            subtitle={data.blog.subtitle}
            posts={data.blog.posts}
            ctaButton={data.blog.ctaButton}
            colors={data.colors?.blog}
          />
        </div>
      </main>
      
      {/* Footer */}
      <LandingFooter
        socialLinks={data.footer.socialLinks}
        navLinks={data.footer.navLinks}
        copyright={data.footer.copyright}
        colors={data.colors?.footer}
      />
    </div>
  );
};

export default Template3;

