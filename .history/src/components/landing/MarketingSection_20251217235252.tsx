import { Button } from "@/components/ui/button";

interface MarketingSectionProps {
  title: string;
  subtitle: string;
  ctaButton: {
    text: string;
    link: string;
  };
}

export const MarketingSection = ({ title, subtitle, ctaButton }: MarketingSectionProps) => {
  return (
    <section className="bg-gray-100 py-8 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
            <p className="text-lg text-gray-600">{subtitle}</p>
            <div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-lg"
              >
                {ctaButton.text}
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Person illustration placeholder */}
              <div className="relative z-10">
                <div className="bg-blue-600 rounded-lg p-8 shadow-xl">
                  <div className="w-32 h-40 bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                    <div className="text-white text-4xl">👤</div>
                  </div>
                </div>
              </div>

              {/* Floating data visualization elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <LineChart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <PieChart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

