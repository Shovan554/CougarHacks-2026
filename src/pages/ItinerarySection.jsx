import { useMemo, useState } from "react";

const ITINERARY_DATA = {
  saturday: {
    date: "Saturday, April 25",
    dayName: "Saturday",
    events: [
      { time: "8:00 AM", hour: 8, title: "Event Starts", description: "Welcome to CougarHacks 2.0!" },
      { time: "12:00 PM", hour: 12, title: "Lunch", description: "Lunch break" },
      { time: "8:00 PM", hour: 20, title: "Dinner", description: "Dinner time" },
    ],
  },
  sunday: {
    date: "Sunday, April 26",
    dayName: "Sunday",
    events: [
      { time: "8:00 AM", hour: 8, title: "Breakfast", description: "Start your day with breakfast" },
      { time: "12:00 PM", hour: 12, title: "Lunch", description: "Lunch break" },
      { time: "3:00 PM", hour: 15, title: "Submissions", description: "Submit your projects" },
      { time: "4:00 PM", hour: 16, title: "Judging", description: "Teams pitch to judges" },
      { time: "5:00 PM", hour: 17, title: "Final Round Judging", description: "Top teams compete for the grand prize" },
    ],
  },
};

export default function ItinerarySection() {
  const [selectedDay, setSelectedDay] = useState("saturday");
  const currentData = ITINERARY_DATA[selectedDay];

  // sort by hour (and keep stable if same hour)
  const sortedEvents = useMemo(() => {
    return [...currentData.events].sort((a, b) => (a.hour ?? 0) - (b.hour ?? 0));
  }, [currentData.events]);

  return (
    <section id="itinerary" className="relative min-h-screen bg-gradient-to-b from-[#02040A] via-[#12060A] to-[#2A0A10] z-[100] flex flex-col">
      <h1 className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit mb-[30px] uppercase">
        Itinerary
      </h1>

      <div className="flex flex-col gap-[30px] grow px-4 md:px-5 lg:px-6 pb-10 max-w-[1400px] mx-auto w-full box-border">
        {/* Day Tabs */}
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          {Object.keys(ITINERARY_DATA).map((dayKey) => {
            const data = ITINERARY_DATA[dayKey];
            const isActive = selectedDay === dayKey;

            return (
              <button
                key={dayKey}
                className={`flex flex-col items-center gap-1 p-2 sm:px-5 sm:py-3 border-2 border-brand rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive ? "bg-brand text-white" : "bg-white text-brand hover:bg-[#f5f5f5]"
                }`}
                onClick={() => setSelectedDay(dayKey)}
              >
                <span className="font-semibold text-xs sm:text-[15px]">{data.dayName}</span>
                <span className={`font-normal text-[10px] sm:text-xs ${isActive ? "text-white" : "text-brand opacity-70"}`}>
                  {dayKey === "saturday" && "Apr 25"}
                  {dayKey === "sunday" && "Apr 26"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Schedule */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-xl sm:text-[1.4rem] md:text-[1.8rem] font-semibold m-0">
            {currentData.date}
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:gap-4 bg-white border-[3px] border-brand rounded-xl p-3 sm:p-5 md:p-6 box-border">
            {sortedEvents.map((event, idx) => (
              <div
                key={`${event.time}-${idx}`}
                className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-[10px] sm:gap-5 p-[10px] sm:p-4 border-b border-[#f0f0f0] last:border-none last:pb-0 items-start"
              >
                {/* Time */}
                <div className="font-bold text-xs sm:text-sm md:text-base text-brand min-w-[90px] sm:min-w-[110px] md:min-w-[140px] whitespace-nowrap">
                  {event.time}
                </div>

                {/* Event */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="m-0 text-[13px] sm:text-sm md:text-base font-semibold text-black">
                    {event.title}
                  </h4>
                  <p className="m-0 text-[11px] sm:text-xs md:text-sm text-[#666] leading-[1.4]">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}

            {sortedEvents.length === 0 && (
              <p className="text-brand font-semibold text-center py-8">
                Schedule coming soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
