import { useState } from "react";

const ITINERARY_DATA = {
  saturday: {
    date: "Saturday, April 25",
    dayName: "Saturday",
    startHour: 8,
    endHour: 20,
    events: [
      { time: "8:00 AM", hour: 8, title: "Event Starts", description: "Welcome to CougarHacks 2.0!" },
      { time: "12:00 PM", hour: 12, title: "Lunch", description: "Lunch break" },
      { time: "8:00 PM", hour: 20, title: "Dinner", description: "Dinner time" },
    ],
  },
  sunday: {
    date: "Sunday, April 26",
    dayName: "Sunday",
    startHour: 8,
    endHour: 17,
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

  const generateHours = () => {
    const hours = [];
    for (let i = currentData.startHour; i <= currentData.endHour; i++) {
      hours.push(i);
    }
    return hours;
  };

  const getEventForHour = (hour) => {
    return currentData.events.find((event) => event.hour === hour);
  };

  const hours = generateHours();

  return (
    <section id="itinerary" className="relative min-h-screen bg-black z-100 flex flex-col">
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
                className={`flex flex-col items-center gap-1 p-2 sm:px-5 sm:py-3 border-2 border-brand rounded-lg cursor-pointer transition-all duration-200 ${isActive ? "bg-brand text-white" : "bg-white text-brand hover:bg-[#f5f5f5]"}`}
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

        {/* Day Calendar */}
        <div className="flex flex-col gap-5">
          <h2 className="text-white text-xl sm:text-[1.4rem] md:text-[1.8rem] font-semibold m-0">{currentData.date}</h2>
          <div className="grid grid-cols-1 gap-2 sm:gap-4 bg-white border-[3px] border-brand rounded-xl p-3 sm:p-5 md:p-6 box-border">
            {hours.map((hour) => {
              const event = getEventForHour(hour);
              const ampm = hour < 12 ? "AM" : "PM";
              const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

              return (
                <div key={hour} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-[10px] sm:gap-5 p-[10px] sm:p-4 border-b border-[#f0f0f0] last:border-none last:pb-0 items-start">
                  <div className="font-bold text-xs sm:text-sm md:text-base text-brand min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                    {displayHour}:00 {ampm}
                  </div>
                  <div className="flex flex-col gap-2">
                    {event && (
                      <div className="flex flex-col gap-1.5">
                        <h4 className="m-0 text-[13px] sm:text-sm md:text-base font-semibold text-black">{event.title}</h4>
                        <p className="m-0 text-[11px] sm:text-xs md:text-sm text-[#666] leading-1.4">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
