import { MapPin } from "lucide-react";
import type { Template6FindUs } from "@/data/landing/template6";

interface FindUsSectionProps {
  data: Template6FindUs;
}

const FindUsSection = ({ data }: FindUsSectionProps) => {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Location Guide
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {data.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              Use the map below to locate our booth at the event venue
            </p>
          </div>
          
          {/* Image Container */}
          {data.imageUrl && (
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-background p-4">
                <img 
                  src={data.imageUrl} 
                  alt={data.title}
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>
              
              {/* Floating location indicator */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-background rounded-2xl p-4 shadow-2xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Booth Location</p>
                    <p className="text-xs text-muted-foreground">Find us easily</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;

