import { Link } from "react-router-dom";
import type { EventHeader as EventHeaderType } from "@/data/landing/template5";

interface EventHeaderProps {
  data: EventHeaderType;
}

export const EventHeader = ({ data }: EventHeaderProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";
  const buttonColor = data.colors?.buttonColor || "#FF6B35";
  const buttonHoverColor = data.colors?.buttonHoverColor || "#E55A2B";

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Greeting */}
          <div className="flex items-center gap-3">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt={data.logoText || "Logo"}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
                {data.logoText?.[0] || 'U'}
              </div>
            )}
            {data.userName && (
              <span className="text-sm font-medium">
                Hey {data.userName}
              </span>
            )}
          </div>

          {/* Right Side - Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to={data.buttons.learnMore.link}
              className="px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: textColor }}
            >
              {data.buttons.learnMore.text}
            </Link>
            <Link
              to={data.buttons.register.link}
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
              {data.buttons.register.text}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};




