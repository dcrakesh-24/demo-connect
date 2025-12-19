import { useEffect, useState } from "react";
import {
  EventHeader,
  EventHero,
  MarketplaceMap,
  EventFooter,
} from "@/components/landing/template5";
import { loadTemplate5Data, clearTemplate5Cache } from "@/data/landing/template5Csv";
import type { Template5Data } from "@/data/landing/template5";

/**
 * Landing Page Template 5
 * 
 * Event/Conference landing page template with personalized greeting,
 * event details, booth information, marketplace map, and team profiles.
 * All data, colors, logos, and text are configurable via template5-config.csv.
 * 
 * Data is loaded from CSV file for easy configuration.
 */
const Template5 = () => {
  const [data, setData] = useState<Template5Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clear cache on mount to ensure fresh data from CSV
    clearTemplate5Cache();
    
    const loadData = async () => {
      try {
        // Force reload by clearing cache
        const loadedData = await loadTemplate5Data(true);
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
      {/* Header */}
      <EventHeader data={data.header} />
      
      {/* Hero Section */}
      <EventHero data={data.hero} />

      {/* Marketplace Map Section */}
      <MarketplaceMap data={data.marketplaceMap} />

      {/* Footer */}
      <EventFooter data={data.footer} />
    </div>
  );
};

export default Template5;




