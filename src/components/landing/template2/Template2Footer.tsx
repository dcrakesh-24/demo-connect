import { Link } from "react-router-dom";

interface Template2FooterProps {
  copyright: string;
  links: {
    terms: string;
    privacy: string;
    cookie: string;
  };
  logo: {
    imageUrl: string;
    alt: string;
  };
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };
}

export const Template2Footer = ({ copyright, links, logo, colors }: Template2FooterProps) => {
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";
  const borderColor = colors?.borderColor || "#E5E7EB";
  
  return (
    <footer 
      className="py-8 border-t"
      style={{ backgroundColor: bgColor, color: textColor, borderColor: borderColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Center: Logo and Copyright */}
          <div className="flex items-center gap-3">
            <img
              src={logo.imageUrl}
              alt={logo.alt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-sm">{copyright}</p>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link to={links.terms} className="hover:underline">
              Terms & Conditions
            </Link>
            <Link to={links.privacy} className="hover:underline">
              Privacy Policy
            </Link>
            <Link to={links.cookie} className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

