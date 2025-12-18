import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import type { BlogArticleFooter as BlogArticleFooterType } from "@/data/landing/template4";

interface BlogArticleFooterProps {
  data: BlogArticleFooterType;
}

export const BlogArticleFooter = ({ data }: BlogArticleFooterProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";
  const linkColor = data.colors?.linkColor || "#000000";

  return (
    <footer
      className="border-t border-gray-200"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Upper Section - Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Footer Columns */}
          {data.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.link}
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-gray-900">
              {data.newsletter.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {data.newsletter.description}
            </p>
            <button
              className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors w-full"
            >
              {data.newsletter.signUpButtonText}
            </button>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <Globe className="w-4 h-4 text-gray-600" />
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 underline transition-colors"
              >
                {data.language}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright and Company Info */}
            <div className="text-sm text-gray-600">
              <p>{data.copyright}</p>
              {data.companyInfo && <p className="mt-1">{data.companyInfo}</p>}
              {data.vatInfo && <p className="mt-1">{data.vatInfo}</p>}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {data.socialLinks.x && (
                <a
                  href={data.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                  aria-label="X (Twitter)"
                >
                  𝕏
                </a>
              )}
              {data.socialLinks.facebook && (
                <a
                  href={data.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {data.socialLinks.linkedin && (
                <a
                  href={data.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg font-bold"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              )}
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                  aria-label="Instagram"
                >
                  📷
                </a>
              )}
              {data.socialLinks.youtube && (
                <a
                  href={data.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                  aria-label="YouTube"
                >
                  ▶
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

