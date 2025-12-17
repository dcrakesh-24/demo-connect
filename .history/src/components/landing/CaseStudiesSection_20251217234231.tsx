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
          {/* Visual Card */}
          <Card className="bg-gradient-to-br from-teal-500 to-blue-600 text-white overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col justify-between min-h-[400px]">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">{caseStudy.title}</h3>
                <div className="inline-block">
                  <span className="bg-teal-400 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    A Case Study
                  </span>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-900">{caseStudy.companyName.split(" ")[0]}</div>
                  <div className="text-lg font-semibold text-green-400">{caseStudy.companyName.split(" ")[1]}</div>
                  <div className="text-sm text-gray-200 mt-1">{caseStudy.companyTagline}</div>
                </div>
                <div className="relative h-32 bg-white/10 rounded-lg flex items-center justify-end pr-4">
                  <div className="w-24 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-xs text-center">
                      <div className="text-yellow-400">★★★★☆</div>
                      <div className="text-white text-[10px] mt-1">4.2 Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{caseStudy.title}</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.description}</p>
            <div>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg"
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

