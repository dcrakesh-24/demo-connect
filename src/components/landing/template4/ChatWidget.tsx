import { useState } from "react";
import { X } from "lucide-react";
import type { ChatWidget as ChatWidgetType } from "@/data/landing/template4";

interface ChatWidgetProps {
  data: ChatWidgetType;
}

export const ChatWidget = ({ data }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";

  if (!data.enabled) return null;

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: bgColor }}
        aria-label="Open chat"
      >
        {data.logoUrl ? (
          <img
            src={data.logoUrl}
            alt="Chat"
            className="w-8 h-8"
          />
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-sm"></div>
        )}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          1
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold" style={{ color: textColor }}>
              Chat Support
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm" style={{ color: textColor }}>
              {data.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

