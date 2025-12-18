import { Button } from "@/components/ui/button";
import { PersonalizedHeader as PersonalizedHeaderType } from "@/data/landing/template2";

interface PersonalizedHeaderProps {
  data: PersonalizedHeaderType;
}

export const PersonalizedHeader = ({ data }: PersonalizedHeaderProps) => {
  return (
    <header className="bg-white text-black py-4 px-6 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo and Greeting */}
        <div className="flex items-center gap-3">
          <img
            src={data.logo.imageUrl}
            alt={data.logo.alt}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-black">
            Hey {data.userName} <span className="text-yellow-400">👋</span>
          </span>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 border-gray-300"
          >
            {data.buttons.learnMore.text}
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            {data.buttons.bookCall.text}
          </Button>
        </div>
      </div>
    </header>
  );
};

