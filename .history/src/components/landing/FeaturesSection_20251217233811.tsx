import { Button } from "@/components/ui/button";
import { Feature } from "@/data/landing/template1";
import {
  Search,
  Lightbulb,
  TrendingUp,
  Phone,
  MessageSquare,
  CheckCircle,
  Search as SearchIcon,
  BarChart3,
  Heart,
  ArrowUpRight,
  PhoneCall,
  Star,
  FileCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
  title: string;
  items: Feature[];
  ctaButton: {
    text: string;
    link: string;
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "search-chart": ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
      <SearchIcon className="w-6 h-6" />
      <BarChart3 className="w-4 h-4 absolute -bottom-1 -right-1" />
    </div>
  ),
  "lightbulb-heart": ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Lightbulb className="w-6 h-6" />
      <Heart className="w-4 h-4 absolute -bottom-1 -right-1 fill-current" />
    </div>
  ),
  "trending-up": TrendingUp,
  "phone-call": PhoneCall,
  "star-message": ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
      <MessageSquare className="w-6 h-6" />
      <Star className="w-4 h-4 absolute -top-1 -right-1 fill-current" />
    </div>
  ),
  "check-document": ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
      <FileCheck className="w-6 h-6" />
      <CheckCircle className="w-4 h-4 absolute -bottom-1 -right-1" />
    </div>
  ),
};

export const FeaturesSection = ({ title, items, ctaButton }: FeaturesSectionProps) => {
  return (
    <section className="bg-[#F2F4FF] py-8 lg:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Search;
            const isCompositeIcon = ["search-chart", "lightbulb-heart", "star-message", "check-document"].includes(feature.icon);
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 relative", feature.iconColor)}>
                  {isCompositeIcon ? (
                    <IconComponent className="relative" />
                  ) : (
                    <IconComponent className="w-6 h-6" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-lg"
          >
            {ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

