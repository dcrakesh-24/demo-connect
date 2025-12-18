import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogArticleAd as BlogArticleAdType } from "@/data/landing/template4";

interface BlogArticleAdProps {
  data: BlogArticleAdType;
}

export const BlogArticleAd = ({ data }: BlogArticleAdProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const borderColor = data.colors?.borderColor || "#E5E7EB";
  const buttonColor = data.colors?.buttonColor || "#00C853";
  const buttonHoverColor = data.colors?.buttonHoverColor || "#00A043";

  return (
    <div
      className="p-6 rounded-lg border-2"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {/* Logo */}
      {data.logoUrl ? (
        <div className="mb-4">
          <div className="bg-white rounded-full p-3 inline-flex items-center justify-center">
            <img
              src={data.logoUrl}
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="bg-white rounded-full p-3 inline-flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-sm"></div>
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight">
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        {data.description}
      </p>

      {/* CTA Button */}
      <Link
        to={data.ctaButton.link}
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-white transition-colors w-full"
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
        {data.ctaButton.text}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

