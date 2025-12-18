import React, { useEffect } from "react";
import { UsefulInfoCard } from "@/data/landing/template2";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface UsefulInfoSectionProps {
  title: string;
  cards: UsefulInfoCard[];
  colors?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

export const UsefulInfoSection = ({ title, cards, colors }: UsefulInfoSectionProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const bgColor = colors?.backgroundColor || "#FFFFFF";
  const textColor = colors?.textColor || "#000000";

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Reset to start
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          {title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cards.map((card) => (
                <CarouselItem key={card.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg h-full flex flex-col">
                    {/* Preview Image */}
                    <div className="relative h-48 bg-gray-200 flex-shrink-0">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-2">
                        {card.icon && (
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            {card.icon}
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs text-gray-500">{card.type}</p>
                          <p className="text-sm font-semibold text-gray-800 line-clamp-2">{card.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

