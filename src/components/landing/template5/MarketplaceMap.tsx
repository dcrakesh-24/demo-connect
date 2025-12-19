import type { MarketplaceMap as MarketplaceMapType } from "@/data/landing/template5";

interface MarketplaceMapProps {
  data: MarketplaceMapType;
}

export const MarketplaceMap = ({ data }: MarketplaceMapProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {data.title}
          </h2>
        </div>

        {/* Map Image */}
        {data.mapImageUrl && (
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
            <img
              src={data.mapImageUrl}
              alt={data.title}
              className="w-full h-auto"
            />
            {/* Red Arrow Indicator - Positioned at top-left pointing to booth */}
            {data.boothNumber && (
              <>
                {/* Arrow pointing to booth */}
                <div className="absolute top-8 left-8 z-10">
                  <svg
                    className="w-24 h-24 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    style={{ transform: 'rotate(-45deg)' }}
                  >
                    <path d="M12 2L2 12h7v10h6V12h7L12 2z" />
                  </svg>
                </div>
                {/* Booth label */}
                <div className="absolute top-12 left-16 z-20">
                  <div className="bg-red-500 text-white px-3 py-1 rounded font-bold text-sm shadow-lg">
                    {data.boothNumber}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

