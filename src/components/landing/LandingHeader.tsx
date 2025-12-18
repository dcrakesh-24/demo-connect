import { Link } from "react-router-dom";

interface LandingHeaderProps {
  logoUrl?: string;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const LandingHeader = ({ logoUrl, colors }: LandingHeaderProps) => {
  const defaultLogo = "https://promanagecdn.blob.core.windows.net/promanage/images/logo-color-230x60.png";
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";

  return (
    <header 
      className="border-b border-gray-200 sticky top-0 z-50"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl || defaultLogo}
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link to="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

