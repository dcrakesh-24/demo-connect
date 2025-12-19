import type { EventFooter as EventFooterType } from "@/data/landing/template5";

interface EventFooterProps {
  data: EventFooterType;
}

export const EventFooter = ({ data }: EventFooterProps) => {
  const bgColor = data.colors?.backgroundColor || "#FFFFFF";
  const textColor = data.colors?.textColor || "#000000";

  return (
    <footer
      className="py-8 text-center"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">{data.text}</p>
      </div>
    </footer>
  );
};




