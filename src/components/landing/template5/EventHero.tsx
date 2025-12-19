import { Link } from "react-router-dom";
import type { EventHero as EventHeroType } from "@/data/landing/template5";

interface EventHeroProps {
  data: EventHeroType;
}

export const EventHero = ({ data }: EventHeroProps) => {
  const bgColor = data.colors?.backgroundColor || "#1E40AF";
  const textColor = data.colors?.textColor || "#FFFFFF";
  const highlightedColor = data.colors?.highlightedTextColor || "#FCD34D";
  const buttonColor = data.colors?.buttonColor || "#FF6B35";
  const buttonHoverColor = data.colors?.buttonHoverColor || "#E55A2B";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            {/* Logos */}
            <div className="flex items-center gap-4 mb-6">
              {data.logos.primary.imageUrl && (
                <img
                  src={data.logos.primary.imageUrl}
                  alt={data.logos.primary.alt}
                  className="h-16 w-16 rounded-full"
                />
              )}
              {data.logos.secondary?.imageUrl && (
                <div className="relative">
                  <div className="absolute -right-2 -top-2 w-12 h-12 bg-white rounded-full opacity-80 blur-sm"></div>
                  <img
                    src={data.logos.secondary.imageUrl}
                    alt={data.logos.secondary.alt}
                    className="relative h-12 w-12 rounded-full"
                  />
                </div>
              )}
            </div>

            {/* Location and Dates */}
            {(data.location || data.dates) && (
              <div className="text-sm opacity-90">
                {data.location && <span>{data.location}</span>}
                {data.location && data.dates && <span> | </span>}
                {data.dates && <span>{data.dates}</span>}
              </div>
            )}

            {/* Personalized Greeting */}
            {data.greeting && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {data.highlightedName && data.greeting.includes(data.highlightedName) ? (
                  data.greeting.split(data.highlightedName).map((part, index, array) => {
                    if (index < array.length - 1) {
                      return (
                        <span key={index}>
                          {part}
                          <span style={{ color: highlightedColor }}>{data.highlightedName}</span>
                        </span>
                      );
                    }
                    return <span key={index}>{part}</span>;
                  })
                ) : (
                  data.greeting.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {line}
                    </span>
                  ))
                )}
              </h1>
            )}

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

            {/* Description */}
            {data.description && (
              <p className="text-base opacity-90 leading-relaxed">
                {data.description}
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
              <Link
                to={data.ctaButton.link}
                className="inline-flex items-center px-6 py-3 rounded-lg text-base font-semibold text-white transition-colors"
                style={{
                  backgroundColor: buttonColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = buttonHoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = buttonColor;
                }}
              >
                {data.ctaButton.text}
              </Link>
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

