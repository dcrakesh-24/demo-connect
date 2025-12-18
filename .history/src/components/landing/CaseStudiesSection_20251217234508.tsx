import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/data/landing/template1";

interface CaseStudiesSectionProps {
  title: string;
  items: CaseStudy[];
}

export const CaseStudiesSection = ({ title, items }: CaseStudiesSectionProps) => {
  const caseStudy = items[0]; // For now, showing the first case study

  return (
    <section className="bg-white py-16 lg:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden w-full h-full min-h-[400px]">
            <img
              src="https://lscdn.blob.core.windows.net/content/c/smart-pm/img/case-study-healthcare.webp"
              alt={caseStudy.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Text Description */}
          <div className="flex flex-col justify-center min-h-[400px] space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{caseStudy.title}</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{caseStudy.description}</p>
            <div className="mt-auto">
              <Button
                variant="outline"
                size="default"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-5 py-2 rounded-lg text-sm"
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

