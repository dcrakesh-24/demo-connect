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
}

export const Template2Footer = ({ copyright, links, logo }: Template2FooterProps) => {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-200">
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

