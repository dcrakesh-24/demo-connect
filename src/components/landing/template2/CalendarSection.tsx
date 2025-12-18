import { CalendarSection as CalendarSectionType, ContactPerson } from "@/data/landing/template2";
import { Button } from "@/components/ui/button";
import { Calendar, Globe } from "lucide-react";

interface CalendarSectionProps {
  calendar: CalendarSectionType;
  contact: ContactPerson;
  colors?: {
    backgroundColor?: string;
    textColor?: string;
    containerWidth?: string;
    containerMinHeight?: string;
  };
}

export const CalendarSection = ({ calendar, contact, colors }: CalendarSectionProps) => {
  const containerWidth = colors?.containerWidth || "70%";
  const containerMinHeight = colors?.containerMinHeight || "720px";
  const bgColor = colors?.backgroundColor || "#2563EB";
  const textColor = colors?.textColor || "#FFFFFF";
  // January 2026 starts on Thursday (Jan 1 = Thursday)
  // Generate calendar dates: 3 empty cells (Mon-Wed), then 1-31
  const getCalendarDates = () => {
    const dates: (number | null)[] = [];
    // First 3 days are empty (Mon-Wed before Jan 1)
    dates.push(null, null, null);
    // Days 1-31
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const calendarDates = getCalendarDates();
  // Highlighted dates: 6-9, 12-16, 19-23, 26-30
  const highlightedDates = [6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className=" mx-auto px-4">
        <div 
          className="mx-auto rounded-lg p-12 lg:p-20 flex items-center"
          style={{ 
            maxWidth: containerWidth,
            minHeight: containerMinHeight,
            backgroundColor: bgColor,
            color: textColor
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Message and Contact */}
            <div className="space-y-8 lg:space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Logos */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <img
                  src={calendar.logos.primary.imageUrl}
                  alt={calendar.logos.primary.alt}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <img
                  src={calendar.logos.secondary.imageUrl}
                  alt={calendar.logos.secondary.alt}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>

              {/* Message */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {calendar.title}
              </h2>

              {/* Contact Person */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <img
                  src={contact.avatarUrl}
                  alt={contact.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-lg">{contact.name}</p>
                  <p className="text-blue-200">{contact.title}</p>
                </div>
              </div>
            </div>

            {/* Right: Calendar Widget */}
            <div className="bg-white rounded-lg p-6 shadow-xl relative overflow-hidden h-[576px] flex flex-col justify-center mx-auto w-full max-w-md">
              {/* Diagonal "POWERED BY Calendly" Banner */}
              <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 transform rotate-45 translate-x-6 -translate-y-2">
                POWERED BY Calendly
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Select a Day</h3>
              </div>

              {/* Calendar */}
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <button className="text-gray-600 hover:text-gray-800">←</button>
                  <span className="font-semibold text-gray-800">January 2026</span>
                  <button className="text-gray-600 hover:text-gray-800">→</button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                    <div key={day} className="text-xs font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                  {calendarDates.map((date, index) => (
                    <button
                      key={index}
                      className={`text-sm py-2 rounded ${
                        date === null
                          ? ""
                          : highlightedDates.includes(date)
                          ? "bg-orange-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      disabled={date === null}
                    >
                      {date || ""}
                    </button>
                  ))}
                </div>

                {/* Timezone */}
                <div className="flex items-center justify-center gap-2 pt-4 border-t">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {calendar.timezone}
                    <span className="ml-1">▾</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

