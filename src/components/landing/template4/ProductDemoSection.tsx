import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductDemoSectionProps {
  title?: string;
  heading: string;
  ctaButton: {
    text: string;
    link: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
  };
}

export const ProductDemoSection = ({
  title = "GET A PRODUCT DEMO",
  heading,
  ctaButton,
  colors,
}: ProductDemoSectionProps) => {
  const bgColor = colors?.backgroundColor || "#00C853";
  const textColor = colors?.textColor || "#FFFFFF";
  const buttonColor = colors?.buttonColor || "#FFFFFF";
  const buttonHoverColor = colors?.buttonHoverColor || "#F5F5F5";

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Diagonal background shape */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{
          background: `linear-gradient(135deg, ${bgColor} 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {title && (
              <div className="text-sm font-semibold uppercase tracking-wider opacity-90">
                {title}
              </div>
            )}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {heading}
            </h2>
            <Link
              to={ctaButton.link}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-base font-semibold transition-colors"
              style={{
                backgroundColor: buttonColor,
                color: bgColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = buttonHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = buttonColor;
              }}
            >
              {ctaButton.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative">
            <div className="relative w-full">
              <img
                src="https://www.brandwatch.com/wp-content/themes/brandwatch/src/core/endpoints/resize.php?image=themes/brandwatch/src/site--brandwatch.com/assets/img/promo/smm.png&width=0"
                alt="Brandwatch Social Media Management Platform"
                className="w-full h-auto rounded-lg"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

