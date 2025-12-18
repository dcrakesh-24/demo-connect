import { PersonalizedHero as PersonalizedHeroType } from "@/data/landing/template2";

interface PersonalizedHeroProps {
  data: PersonalizedHeroType;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    greetingFontSize?: string;
    greetingLineHeight?: string;
    greetingFontFamily?: string;
    greetingFontWeight?: string;
  };
}

export const PersonalizedHero = ({ data, colors }: PersonalizedHeroProps) => {
  const bgColor = colors?.backgroundColor || "#000000";
  const textColor = colors?.textColor || "#FFFFFF";
  const greetingStyle = {
    fontSize: colors?.greetingFontSize || "48px",
    lineHeight: colors?.greetingLineHeight || "1.25",
    fontFamily: colors?.greetingFontFamily || "Aeonik",
    fontWeight: colors?.greetingFontWeight || "700",
  };
  
  return (
    <section 
      className="min-h-[600px] flex items-center py-16"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img
                src={data.logos.primary.imageUrl}
                alt={data.logos.primary.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <img
                src={data.logos.secondary.imageUrl}
                alt={data.logos.secondary.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Greeting */}
            <h1 className="whitespace-pre-line" style={greetingStyle}>
              {data.greeting}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* Right Graphic */}
          <div className="relative flex items-center justify-center">
            {data.graphicImageUrl && (
              <img
                src={data.graphicImageUrl}
                alt="3D Graphic"
                className="w-full max-w-md h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

