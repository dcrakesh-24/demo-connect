import { Button } from "@/components/ui/button";

interface MarketingSectionProps {
  title: string;
  subtitle: string;
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const MarketingSection = ({ title, subtitle, ctaButton, colors }: MarketingSectionProps) => {
  const bgColor = colors?.backgroundColor || "#F2F4FF";
  const textColor = colors?.textColor || "#000000";
  
  return (
    <section 
      className="py-8 lg:py-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">{subtitle}</p>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 text-sm rounded-lg"
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
                className="w-full h-auto max-h-50 md:max-h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

