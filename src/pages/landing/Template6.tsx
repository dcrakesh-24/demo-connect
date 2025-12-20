import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Header,
  HeroSection,
  FeaturesSection,
  BoothMapSection,
  TeamSection,
  CTASection,
  FindUsSection,
  Footer,
} from "@/components/landing/template6";
import { loadTemplate6Data, clearTemplate6Cache } from "@/data/landing/template6Csv";
import type { Template6Data } from "@/data/landing/template6";

/**
 * Landing Page Template 6
 * 
 * Modern event/conference landing page template with:
 * - Fixed header with navigation
 * - Hero section with personalized greeting and venue image
 * - Features section highlighting discussion topics
 * - Booth map section with location details
 * - Team section with member profiles
 * - CTA section for booking meetings
 * - Footer with links and social media
 * 
 * All data, colors, logos, and text are configurable via template6-config.csv.
 */
const Template6 = () => {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get('companyId') || undefined;
  const [data, setData] = useState<Template6Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear cache on mount to ensure fresh data from CSV
    clearTemplate6Cache(companyId);
    
    const loadData = async () => {
      try {
        // Force reload by clearing cache
        const loadedData = await loadTemplate6Data(companyId, true);
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
    <div className="min-h-screen bg-background">
      <Header data={data.header} />
      <main>
        <HeroSection data={data.hero} />
        <FeaturesSection data={data.features} />
        <BoothMapSection data={data.boothMap} />
        <FindUsSection data={data.findUs} />
        <TeamSection data={data.team} />
        <CTASection data={data.cta} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
};

export default Template6;

