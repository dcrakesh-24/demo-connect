import { Button } from "@/components/ui/button";

interface IntroSectionProps {
  title: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
}

export const IntroSection = ({ title, description, ctaButton }: IntroSectionProps) => {
  return (
    <section className="bg-white py-16 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">{description}</p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-lg"
            >
              {ctaButton.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

