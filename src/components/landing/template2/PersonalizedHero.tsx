import { PersonalizedHero as PersonalizedHeroType } from "@/data/landing/template2";

interface PersonalizedHeroProps {
  data: PersonalizedHeroType;
}

export const PersonalizedHero = ({ data }: PersonalizedHeroProps) => {
  return (
    <section className="bg-black text-white min-h-[600px] flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img
                src={data.logos.primary.imageUrl}
                alt={data.logos.primary.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <img
                src={data.logos.secondary.imageUrl}
                alt={data.logos.secondary.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Greeting */}
            <h1 className="personalized-greeting whitespace-pre-line text-white">
              {data.greeting}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

          {/* Right Graphic */}
          <div className="relative flex items-center justify-center">
            {data.graphicImageUrl && (
              <img
                src={data.graphicImageUrl}
                alt="3D Graphic"
                className="w-full max-w-md h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

