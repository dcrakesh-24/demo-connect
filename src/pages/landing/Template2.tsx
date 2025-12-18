import { PersonalizedHeader } from "@/components/landing/template2/PersonalizedHeader";
import { PersonalizedHero } from "@/components/landing/template2/PersonalizedHero";
import { UsefulInfoSection } from "@/components/landing/template2/UsefulInfoSection";
import { VideoSection } from "@/components/landing/template2/VideoSection";
import { CalendarSection } from "@/components/landing/template2/CalendarSection";
import { Template2Footer } from "@/components/landing/template2/Template2Footer";
import { template2Data } from "@/data/landing/template2";

/**
 * Landing Page Template 2
 * 
 * Personalized Demo/Landing Page Template
 * This template is designed for personalized demo experiences with video, calendar, and useful information sections.
 * 
 * Data is currently static but structured to support dynamic data loading later.
 */
const Template2 = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <PersonalizedHeader data={template2Data.header} />

      <main>
        {/* Hero Section */}
        <PersonalizedHero data={template2Data.hero} />

        {/* Useful Information Section */}
        <UsefulInfoSection
          title={template2Data.usefulInfo.title}
          cards={template2Data.usefulInfo.cards}
        />

        {/* Video Section */}
        <VideoSection data={template2Data.video} />

        {/* Calendar Section */}
        <CalendarSection
          calendar={template2Data.calendar}
          contact={template2Data.contact}
        />
      </main>

      {/* Footer */}
      <Template2Footer
        copyright={template2Data.footer.copyright}
        links={template2Data.footer.links}
        logo={template2Data.footer.logo}
      />
    </div>
  );
};

export default Template2;

