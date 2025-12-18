import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { BlogArticleHeader as BlogArticleHeaderType } from "@/data/landing/template4";

interface BlogArticleHeaderProps {
  data: BlogArticleHeaderType;
}

export const BlogArticleHeader = ({ data }: BlogArticleHeaderProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";
  const buttonColor = data.colors?.buttonColor || "#00C853";
  const buttonHoverColor = data.colors?.buttonHoverColor || "#00A043";

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            {data.logoUrl ? (
              <>
                <img
                  src={data.logoUrl}
                  alt={data.logoText || "Logo"}
                  className="h-12 w-auto"
                />
                {data.logoText && (
                  <span className="text-xl font-semibold" style={{ color: textColor }}>
                    {data.logoText}
                  </span>
                )}
              </>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-sm"></div>
                {data.logoText && (
                  <span className="text-xl font-semibold" style={{ color: textColor }}>
                    {data.logoText}
                  </span>
                )}
              </div>
            )}
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {data.navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: textColor }}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              to={data.signInLink}
              className="hidden md:flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: textColor }}
            >
              Sign in
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              to={data.getStartedLink}
              className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors"
              style={{
                backgroundColor: buttonColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = buttonHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = buttonColor;
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

