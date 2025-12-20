import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PersonalizedHeader } from "@/components/landing/template2/PersonalizedHeader";
import { PersonalizedHero } from "@/components/landing/template2/PersonalizedHero";
import { UsefulInfoSection } from "@/components/landing/template2/UsefulInfoSection";
import { VideoSection } from "@/components/landing/template2/VideoSection";
import { CalendarSection } from "@/components/landing/template2/CalendarSection";
import { Template2Footer } from "@/components/landing/template2/Template2Footer";
import { loadTemplate2Data, clearTemplate2Cache } from "@/data/landing/template2Csv";
import type { Template2Data } from "@/data/landing/template2";

/**
 * Landing Page Template 2
 * 
 * Personalized Demo/Landing Page Template
 * Data is loaded from CSV file for easy configuration.
 */
const Template2 = () => {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get('companyId') || undefined;
  const [data, setData] = useState<Template2Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear cache on mount to ensure fresh data from CSV
    clearTemplate2Cache(companyId);
    
    loadTemplate2Data(companyId, true)
      .then((loadedData) => {
        setData(loadedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500">Error loading data: {error || "Unknown error"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: data.colors?.hero?.backgroundColor || '#000000' }}>
      {/* Header */}
      <PersonalizedHeader data={data.header} colors={data.colors?.header} />

      <main>
        {/* Hero Section */}
        <PersonalizedHero data={data.hero} colors={data.colors?.hero} />

        {/* Useful Information Section */}
        <UsefulInfoSection
          title={data.usefulInfo.title}
          cards={data.usefulInfo.cards}
          colors={data.colors?.usefulInfo}
        />

        {/* Video Section */}
        <VideoSection data={data.video} colors={data.colors?.video} />

        {/* Calendar Section */}
        <CalendarSection
          calendar={data.calendar}
          contact={data.contact}
          colors={data.colors?.calendar}
        />
      </main>

      {/* Footer */}
      <Template2Footer
        copyright={data.footer.copyright}
        links={data.footer.links}
        logo={data.footer.logo}
        colors={data.colors?.footer}
      />
    </div>
  );
};

export default Template2;

