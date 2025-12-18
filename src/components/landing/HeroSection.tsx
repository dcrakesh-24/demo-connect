import { Button } from "@/components/ui/button";
import { HeroSection as HeroSectionType } from "@/data/landing/template1";

interface HeroSectionProps {
  data: HeroSectionType;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    highlightedTextColor?: string;
    ctaButtonColor?: string;
    ctaButtonHoverColor?: string;
  };
}

export const HeroSection = ({ data, colors }: HeroSectionProps) => {
  const bgColor = colors?.backgroundColor || "#011A65";
  const textColor = colors?.textColor || "#FFFFFF";
  const highlightedColor = colors?.highlightedTextColor || "#FF6B35";
  const ctaColor = colors?.ctaButtonColor || "#00d4ff";
  const ctaHoverColor = colors?.ctaButtonHoverColor || "#00b8e6";

  return (
    <section 
      className="relative min-h-[600px] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full gap-0">
          {/* Left Content */}
          <div className="space-y-6 z-10 flex-1 lg:pr-0 lg:mr-0">
            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              {data.headline}
              <span>
              <br />
              Boost Your Business by
              <br />
              Reaching Local Customers with
              <br />

              </span>
             
              <span style={{ color: highlightedColor }}>{data.highlightedText}</span>
            </h5>
            <h5 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-tight">
    
              Use <span style={{ color: highlightedColor }}>'Near Me'</span> Searches To
              <br />
              Your Advantage.
            </h5>
            
            <Button
              size="lg"
              className="text-white font-semibold px-8 py-6 text-lg rounded-lg"
              style={{ backgroundColor: ctaColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = ctaHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ctaColor;
              }}
            >
              {data.ctaButton.text}
            </Button>
            
          </div>
          

          {/* Right Graphic */}
          <div className="relative flex items-center justify-center lg:justify-start flex-1 lg:pl-0 lg:ml-0">
            <div
              className="hero-graphic"
              style={
                data.graphicBackgroundImage
                  ? {
                      backgroundImage: `url(${data.graphicBackgroundImage})`,
                    }
                  : undefined
              }
            >
              {/* Inner dashed circle */}
              <div  />
              
              {/* Center content */}
              <div className="relative flex items-center justify-center h-64">
                <div className=" rounded-xl p-8  flex items-center justify-center">
                  {data.companyLogo ? (
                    <img
                      src={data.companyLogo}
                      alt={data.companyName}
                      className="max-w-full h-auto max-h-32 object-contain"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-[#1e3a5f]">
                      {data.companyName
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toLowerCase()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

