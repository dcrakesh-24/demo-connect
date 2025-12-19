import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import type { Template6BoothMap } from "@/data/landing/template6";

interface BoothMapSectionProps {
  data: Template6BoothMap;
}

const BoothMapSection = ({ data }: BoothMapSectionProps) => {
  return (
    <section 
      id="booth" 
      className="py-16 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">
              {data.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.description}
            </p>

            {/* Location details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{data.locationDetails.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {data.locationDetails.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{data.directions.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {data.directions.description}
                  </p>
                </div>
              </div>
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to={data.ctaButton.link}>{data.ctaButton.text}</Link>
            </Button>
          </div>

          {/* Right - Map */}
          <div className="relative">
            {data.mapImageUrl && (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-background p-4">
                <img 
                  src={data.mapImageUrl} 
                  alt="Exhibition floor map showing booth location"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Booth indicator overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-accent/20 animate-ping absolute inset-0" />
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center relative z-10 shadow-lg">
                      <span className="text-accent-foreground font-bold">{data.boothNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoothMapSection;

