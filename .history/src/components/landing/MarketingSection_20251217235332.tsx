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
              <img
                src="https://promanagecdn.blob.core.windows.net/promanage/images/smart-pm/img/hyperlocal-marketing-software.svg"
                alt="Hyperlocal Marketing Software"
                className="w-full h-auto max-h-64 md:max-h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

