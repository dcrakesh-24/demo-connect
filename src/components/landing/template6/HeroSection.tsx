import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Template6Hero } from "@/data/landing/template6";

interface HeroSectionProps {
  data: Template6Hero;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const bgColor = data.colors?.backgroundColor || '#1E40AF';
  const textColor = '#FFFFFF';
  const highlightedColor = data.colors?.highlightedTextColor || '#FCD34D';
  const buttonColor = '#FF6B35';

  return (
    <section 
      className="relative min-h-screen pt-20 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left content */}
          <div className="space-y-6 z-10">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">u</span>
              </div>
            </div>

            {/* Event details */}
            <div className="text-sm opacity-90 mb-4">
              {data.venueName && <span>{data.venueName}</span>}
              {data.venueName && data.venueLocation && <span>, </span>}
              {data.venueLocation && <span>{data.venueLocation}</span>}
              {(data.venueName || data.venueLocation) && data.eventDate && <span> | </span>}
              {data.eventDate && <span>{data.eventDate}</span>}
            </div>

            {/* Personalized Greeting */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {data.highlightedName && data.greeting.includes(data.highlightedName) ? (
                <>
                  <span style={{ color: highlightedColor }}>{data.highlightedName},</span> {data.greeting.split(data.highlightedName)[1]?.trim()}
                </>
              ) : (
                data.greeting
              )}
            </h1>

            {/* Booth Info */}
            {data.boothInfo && (
              <p className="text-lg leading-relaxed">
                {data.boothInfo.split(data.boothNumber).map((part, index, array) => {
                  if (index < array.length - 1) {
                    return (
                      <span key={index}>
                        {part}
                        <span className="font-bold" style={{ color: highlightedColor }}>
                          {data.boothNumber}!
                        </span>
                      </span>
                    );
                  }
                  return <span key={index}>{part}</span>;
                })}
              </p>
            )}

            {/* Topics List */}
            {data.topics.length > 0 && (
              <ul className="space-y-2">
                {data.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-xl mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="group"
                style={{
                  backgroundColor: buttonColor,
                  color: 'white',
                }}
                asChild
              >
                <Link to={data.primaryCta.link}>
                  {data.primaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Team Members */}
            {data.teamMembers.length > 0 && (
              <div className="pt-8">
                <div className="grid grid-cols-3 gap-6">
                  {data.teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                      {member.avatarUrl ? (
                        <img
                          src={member.avatarUrl}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 shadow-lg"
                          style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-white/20 flex items-center justify-center text-2xl font-bold shadow-lg">
                          {member.name[0]}
                        </div>
                      )}
                      <div className="text-sm font-semibold mb-1">{member.name}</div>
                      <div className="text-xs opacity-90">{member.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Content - Resort Image */}
          {data.resortImageUrl && (
            <div className="relative lg:h-[700px] lg:sticky lg:top-20">
              <img
                src={data.resortImageUrl}
                alt="Event Venue"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

