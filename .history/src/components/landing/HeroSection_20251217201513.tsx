import { Button } from "@/components/ui/button";
import { HeroSection as HeroSectionType } from "@/data/landing/template1";
import { Search, TrendingUp, MapPin } from "lucide-react";

interface HeroSectionProps {
  data: HeroSectionType;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative bg-[#1e3a5f] text-white min-h-[600px] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
            </h1>
            <Button
              size="lg"
              className="bg-[#00d4ff] hover:bg-[#00b8e6] text-white font-semibold px-8 py-6 text-lg rounded-lg"
            >
              {data.ctaButton.text}
            </Button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer dashed circle */}
              <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-full animate-pulse" />
              
              {/* Inner dashed circle */}
              <div className="absolute inset-8 border-2 border-dashed border-white/50 rounded-full" />
              
              {/* Center content */}
              <div className="relative flex items-center justify-center h-64">
                <div className="bg-white rounded-xl p-8 shadow-2xl">
                  <div className="text-4xl font-bold text-[#1e3a5f]">
                    {data.companyName
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toLowerCase()}
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00d4ff] rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

