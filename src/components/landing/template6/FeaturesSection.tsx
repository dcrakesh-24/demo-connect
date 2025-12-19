import { Sparkles, Target, Users, Zap, LucideIcon } from "lucide-react";
import type { Template6Features } from "@/data/landing/template6";

interface FeaturesSectionProps {
  data: Template6Features;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Target,
  Users,
  Zap,
};

const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            {data.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-muted-foreground text-lg">
              {data.description}
            </p>
          )}
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 rounded-2xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

