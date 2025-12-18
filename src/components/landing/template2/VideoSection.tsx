import { VideoSection as VideoSectionType } from "@/data/landing/template2";

interface VideoSectionProps {
  data: VideoSectionType;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const VideoSection = ({ data, colors }: VideoSectionProps) => {
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";
  
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            {data.title}
          </h2>

          {/* Video Player */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              {data.videoUrl ? (
                <iframe
                  src={data.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Demo Video"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">▶</div>
                    <p className="text-lg">Video Player</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

