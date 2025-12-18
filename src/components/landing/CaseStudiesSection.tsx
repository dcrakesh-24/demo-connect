import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/data/landing/template1";

interface CaseStudiesSectionProps {
  title: string;
  items: CaseStudy[];
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const CaseStudiesSection = ({ title, items, colors }: CaseStudiesSectionProps) => {
  const caseStudy = items[0]; // For now, showing the first case study
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";

  return (
    <section 
      className="py-16 lg:py-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-800 text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://lscdn.blob.core.windows.net/content/c/smart-pm/img/case-study-healthcare.webp"
              alt={caseStudy.title}
              className="w-full h-full object-cover object-left rounded-lg"
            />
          </div>

          {/* Text Description */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl md:text-xl font-bold text-gray-800">{caseStudy.title}</h3>
            <p className="text-sm md:text-sm text-gray-600 leading-relaxed flex-grow">{caseStudy.description}</p>
            <div>
              <Button
                variant="outline"
                size="default"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-5 py-5 text-sm rounded-lg"
              >
                {caseStudy.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

