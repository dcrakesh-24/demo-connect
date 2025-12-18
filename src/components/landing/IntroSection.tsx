import { Button } from "@/components/ui/button";

interface IntroSectionProps {
  title: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const IntroSection = ({ title, description, ctaButton, colors }: IntroSectionProps) => {
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";
  
  return (
    <section 
      className="py-16 lg:py-8"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white  font-semibold px-5 py-5 text-sm rounded-lg"
            >
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

