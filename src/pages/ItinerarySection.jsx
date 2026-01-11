import { useState } from "react";
import "./ItinerarySection.css";

const ITINERARY_DATA = {
  friday: {
    date: "Friday, April 17",
    dayName: "Friday",
    startHour: 18,
    endHour: 21,
    events: [
      { time: "6:00 PM", hour: 18, title: "Doors Open & Registration", description: "Check-in and get your badge" },
      { time: "7:00 PM", hour: 19, title: "Opening Ceremony", description: "Welcome to CougarHacks 2.0!" },
      { time: "8:00 PM", hour: 20, title: "Team Formation & Pitching", description: "Find your team and pitch ideas" },
      { time: "9:00 PM", hour: 21, title: "Hacking Begins", description: "Start building your projects" },
    ],
  },
  saturday: {
    date: "Saturday, April 18",
    dayName: "Saturday",
    startHour: 9,
    endHour: 21,
    events: [
      { time: "9:00 AM", hour: 9, title: "Breakfast", description: "Start your day with breakfast" },
      { time: "10:00 AM", hour: 10, title: "Mentor Office Hours", description: "Get help from mentors" },
      { time: "12:00 PM", hour: 12, title: "Lunch", description: "Lunch break" },
      { time: "1:00 PM", hour: 13, title: "Continue Building", description: "Keep hacking on your project" },
      { time: "3:00 PM", hour: 15, title: "Tech Talks", description: "Learn from industry experts" },
      { time: "5:00 PM", hour: 17, title: "Dinner", description: "Dinner time" },
      { time: "9:00 PM", hour: 21, title: "Late Night Work Session", description: "Final push before judging" },
    ],
  },
  sunday: {
    date: "Sunday, April 19",
    dayName: "Sunday",
    startHour: 9,
    endHour: 19,
    events: [
      { time: "9:00 AM", hour: 9, title: "Breakfast", description: "Final breakfast of the event" },
      { time: "10:00 AM", hour: 10, title: "Final Push", description: "Last hours to finish your project" },
      { time: "12:00 PM", hour: 12, title: "Submissions Deadline", description: "Submit your projects" },
      { time: "1:00 PM", hour: 13, title: "Project Demos Begin", description: "See what everyone built" },
      { time: "4:00 PM", hour: 16, title: "Judging", description: "Teams pitch to judges" },
      { time: "7:00 PM", hour: 19, title: "Awards & Closing Ceremony", description: "Celebrate the winners!" },
    ],
  },
};

export default function ItinerarySection() {
  const [selectedDay, setSelectedDay] = useState("friday");
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
    <section id="itinerary" className="itinerarySection">
      <h1 className="itineraryTitle">Itinerary</h1>

      <div className="itineraryContainer">
        {/* Day Tabs */}
        <div className="dayTabs">
          {Object.keys(ITINERARY_DATA).map((dayKey) => {
            const data = ITINERARY_DATA[dayKey];
            return (
              <button
                key={dayKey}
                className={`dayTab ${selectedDay === dayKey ? "active" : ""}`}
                onClick={() => setSelectedDay(dayKey)}
              >
                <span className="dayName">{data.dayName}</span>
                <span className="dayDate">
                  {dayKey === "friday" && "Apr 17"}
                  {dayKey === "saturday" && "Apr 18"}
                  {dayKey === "sunday" && "Apr 19"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day Calendar */}
        <div className="dayCalendarContainer">
          <h2 className="calendarDate">{currentData.date}</h2>
          <div className="dayCalendar">
            {hours.map((hour) => {
              const event = getEventForHour(hour);
              const ampm = hour < 12 ? "AM" : "PM";
              const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

              return (
                <div key={hour} className="timeSlot">
                  <div className="timeLabel">
                    {displayHour}:00 {ampm}
                  </div>
                  <div className="timeContent">
                    {event && (
                      <div className="event">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
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
