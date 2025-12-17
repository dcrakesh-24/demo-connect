import { Button } from "@/components/ui/button";
import { HeroSection as HeroSectionType } from "@/data/landing/template1";
import { Search, TrendingUp, MapPin } from "lucide-react";

interface HeroSectionProps {
  data: HeroSectionType;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative bg-[#062d5f] text-white min-h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {data.headline}
              <br />
              Boost Your Business by
              <br />
              Reaching Local Customers with
              <br />
              <span className="text-orange-500">{data.highlightedText}</span>
              <br />
              Use <span className="text-orange-500">'Near Me'</span> Searches To
              <br />
              Your Advantage.
            </h5>
            <Button
              size="lg"
              className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white font-semibold px-8 py-6 text-lg rounded-lg"
            >
              {data.ctaButton.text}
            </Button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex items-center justify-center lg:justify-end">
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
              {/* Outer dashed white ring */}
              <div className="absolute inset-0 border border-dashed border-white/60 rounded-full" />
              
              {/* Inner dark blue solid ring */}
              <div className="absolute inset-2 border-2 border-[#062d5f] rounded-full" />
              
              {/* White circle */}
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                {/* Light blue rounded square with gradient */}
                <div className="bg-gradient-to-b from-[#00d4ff] to-[#0088bb] rounded-xl p-6 shadow-xl flex items-center justify-center">
                  {data.companyLogo ? (
                    <img
                      src={data.companyLogo}
                      alt={data.companyName}
                      className="max-w-full h-auto max-h-20 object-contain"
                    />
                  ) : (
                    <div className="text-3xl font-bold text-white">
                      {data.companyName
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toLowerCase()}
                    </div>
                  )}
                </div>
              </div>

              {/* Colored dots positioned on outer dashed ring */}
              <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00d4ff] rounded-full z-20" />
              <div className="absolute top-0 right-1/4 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full z-20" />
              <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

