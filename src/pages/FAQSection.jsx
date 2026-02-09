import { useMemo, useState } from "react";

/* ---------------- FAQ DATA ---------------- */
const FAQ_ITEMS = [
  // -------- General --------
  {
    id: 1,
    category: "General",
    question: "What is CougarHacks?",
    answer:
      "CougarHacks is a 36-hour hackathon where students collaborate to design and build innovative projects such as apps, websites, hardware prototypes, AI tools, and games. It’s a weekend focused on creativity, learning, teamwork, and fun.",
  },
  {
    id: 2,
    category: "General",
    question: "When is CougarHacks taking place?",
    answer:
      "CougarHacks will be held on April 25–26 (weekend). A detailed schedule, including check-in, opening ceremony, workshops, and judging times, will be shared closer to the event.",
  },
  {
    id: 3,
    category: "General",
    question: "Who is eligible to attend CougarHacks?",
    answer:
      "Students from any university or high school are welcome to participate. All experience levels are encouraged to join, from complete beginners to advanced developers.",
  },
  {
    id: 4,
    category: "General",
    question: "How much does it cost to attend?",
    answer:
      "Attendance is completely free. Simply register in advance to secure your spot.",
  },
  {
    id: 5,
    category: "General",
    question: "Do I need prior experience to participate?",
    answer:
      "No experience is required. We provide mentors, beginner-friendly project ideas, and team support to help everyone build something meaningful.",
  },

  // ✅ NEW — Volunteer (clickable link)
  {
    id: 18,
    category: "General",
    question: "How can I volunteer for CougarHacks?",
    answer: (
      <>
        Fill out the volunteer form here:{" "}
        <a
          href="https://forms.gle/2hnYpZMnnGm4wp3o9"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold hover:opacity-80"
        >
          Volunteer Form
        </a>
        .
      </>
    ),
  },

  // ✅ NEW — Sponsor (separate question)
  {
    id: 21,
    category: "General",
    question: "How can I sponsor CougarHacks?",
    answer:
      "Sponsors can support prizes, meals, swag, and event logistics. Sponsorship details and outreach instructions will be posted on the website soon. In the meantime, feel free to contact the CougarHacks team directly.",
  },

  // -------- Teams & Build --------
  {
    id: 6,
    category: "Teams & Build",
    question: "Can I participate without a team?",
    answer:
      "Yes. You can come with friends, work solo, or join a team during the team-forming session at the start of the event.",
  },
  {
    id: 7,
    category: "Teams & Build",
    question: "How many people can be on a team?",
    answer:
      "Teams typically consist of 1–4 members, which is the standard for most hackathons. Final limits will be outlined in the official rules.",
  },
  {
    id: 8,
    category: "Teams & Build",
    question: "What types of projects can we build?",
    answer:
      "You can build anything you can demo by the end of the event—software, hardware, AI solutions, design prototypes, tools, games, or websites. Creativity is encouraged.",
  },
  {
    id: 13,
    category: "Teams & Build",
    question: "What are mentors and how can they help?",
    answer:
      "Mentors are experienced volunteers who provide guidance with brainstorming, debugging, technical challenges, pitching, and design feedback. They help you move faster but won’t build the project for you.",
  },
  {
    id: 16,
    category: "Teams & Build",
    question: "What if we don’t finish our project?",
    answer:
      "That’s completely normal. You can still present what you’ve built. Hackathons focus on learning, experimenting, and progress—not perfection.",
  },

  // -------- Logistics & Rules --------
  {
    id: 9,
    category: "Logistics & Rules",
    question: "What should I bring to the event?",
    answer:
      "Bring your laptop and charger, any hardware you plan to use (Arduino, sensors, etc.), headphones, a water bottle, and optional items like a hoodie or blanket if staying late.",
  },
  {
    id: 10,
    category: "Logistics & Rules",
    question: "Will food be provided?",
    answer:
      "Yes. Meals and snacks will be provided throughout the event. Dietary preferences and restrictions can be specified during registration.",
  },
  {
    id: 11,
    category: "Logistics & Rules",
    question: "Are there sleeping arrangements?",
    answer:
      "Yes. Designated quiet rooms will be available for rest. Participants may also relax in their work areas if preferred.",
  },
  {
    id: 12,
    category: "Logistics & Rules",
    question: "Do I have to stay for the entire 36 hours?",
    answer:
      "No. You’re free to take breaks, leave, and return as needed, as long as your team submits your project on time and follows event guidelines.",
  },
  {
    id: 14,
    category: "Logistics & Rules",
    question: "How do project submissions work?",
    answer:
      "Teams will submit a short project description, a demo or video, and a link to their code (GitHub encouraged). Full submission instructions will be shared before the event.",
  },
  {
    id: 15,
    category: "Logistics & Rules",
    question: "How are projects judged?",
    answer:
      "Judging is based on creativity, technical complexity, usefulness or impact, and the quality of the demo and presentation.",
  },
  {
    id: 17,
    category: "Logistics & Rules",
    question: "Is there a code of conduct?",
    answer:
      "Yes. CougarHacks is an inclusive and respectful environment. Harassment, discrimination, or disruptive behavior will not be tolerated.",
  },
  {
    id: 19,
    category: "Logistics & Rules",
    question: "Can high school students or participants under 18 attend overnight?",
    answer:
      "High school students are welcome to participate. However, for safety reasons, participants under 18 may not stay overnight and must leave the venue between 12:00 AM and 5:00 AM, returning in the morning.",
  },
  {
    id: 20,
    category: "Logistics & Rules",
    question: "Where will CougarHacks be held?",
    answer:
      "The event will take place at Caldwell University, located at 120 Bloomfield Avenue, Caldwell, NJ 07006.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function FAQSection() {
  const categories = useMemo(() => {
    return [...new Set(FAQ_ITEMS.map((i) => i.category))];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [expandedId, setExpandedId] = useState(null);

  const filtered = FAQ_ITEMS.filter((i) => i.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#071225] via-[#050A14] to-[#02040A] z-[90] flex flex-col py-16 md:py-24">
      {/* Title */}
      <h1 className="text-white text-[calc(1.8rem+3px)] sm:text-[calc(2.2rem+3px)] md:text-[calc(2.8rem+3px)] lg:text-[calc(3.5rem+3px)] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit uppercase">
        FAQ
      </h1>

      <div className="w-full px-4 md:px-6 lg:px-10 py-8 max-w-[1400px] mx-auto">

        {/* Tabs */}
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap mb-6 pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedId(null);
                }}
                className={`flex-shrink-0 px-5 py-3 border-2 border-brand rounded-lg font-content font-bold uppercase text-sm tracking-wide transition-all duration-200 ${
                  isActive ? "bg-brand text-white" : "bg-white text-brand hover:bg-[#f5f5f5]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white border-2 border-brand rounded-lg overflow-hidden">

              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-4 flex justify-between items-center text-lg font-content font-semibold text-brand text-left hover:bg-gray-100 transition"
              >
                {item.question}
                <span className={`transition-transform ${expandedId === item.id ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {expandedId === item.id && (
                <div className="px-4 pb-4 border-t border-brand">
                  <p className="text-base font-content text-brand mt-3">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
