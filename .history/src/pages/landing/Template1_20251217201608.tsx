import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CaseStudiesSection } from "@/components/landing/CaseStudiesSection";
import { MarketingSection } from "@/components/landing/MarketingSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { template1Data } from "@/data/landing/template1";

/**
 * Landing Page Template 1
 * 
 * This is the first template for landing pages.
 * The structure is designed to be easily extensible for future templates.
 * 
 * Data is currently static but structured to support dynamic data loading later.
 */
const Template1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      <main>
        {/* Hero Section */}
        <HeroSection data={template1Data.hero} />
        
        {/* Intro Section */}
        <IntroSection
          title={template1Data.intro.title}
          description={template1Data.intro.description}
          ctaButton={template1Data.intro.ctaButton}
        />
        
        {/* Features Section */}
        <div id="features">
          <FeaturesSection
            title={template1Data.features.title}
            items={template1Data.features.items}
            ctaButton={template1Data.features.ctaButton}
          />
        </div>
        
        {/* Case Studies Section */}
        <div id="case-studies">
          <CaseStudiesSection
            title={template1Data.caseStudies.title}
            items={template1Data.caseStudies.items}
          />
        </div>
        
        {/* Marketing Section */}
        <MarketingSection
          title={template1Data.marketingSection.title}
          subtitle={template1Data.marketingSection.subtitle}
          ctaButton={template1Data.marketingSection.ctaButton}
        />
        
        {/* Blog Section */}
        <div id="blog">
          <BlogSection
            title={template1Data.blog.title}
            subtitle={template1Data.blog.subtitle}
            posts={template1Data.blog.posts}
            ctaButton={template1Data.blog.ctaButton}
          />
        </div>
      </main>
      
      {/* Footer */}
      <LandingFooter
        socialLinks={template1Data.footer.socialLinks}
        navLinks={template1Data.footer.navLinks}
        copyright={template1Data.footer.copyright}
      />
    </div>
  );
};

export default Template1;

