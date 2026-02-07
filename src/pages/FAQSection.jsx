import { useMemo, useState } from "react";

/* ---------------- FAQ DATA ---------------- */
const FAQ_ITEMS = [
  // -------- General --------
  {
    id: 1,
    category: "General",
    question: "What is CougarHacks?",
    answer:
      "CougarHacks is a 36-hour hackathon where students team up to build cool projects—apps, websites, hardware hacks, AI tools, games, and more. Come for the building, stay for the vibes, snacks, and demos.",
  },
  {
    id: 2,
    category: "General",
    question: "When is it?",
    answer:
      "April 25–26 (weekend). The detailed schedule (check-in, opening, judging, etc.) will be posted closer to the event.",
  },
  {
    id: 3,
    category: "General",
    question: "Who can attend?",
    answer:
      "This year, students from any university are welcome to join. All skill levels are welcome—beginner to advanced.",
  },
  {
    id: 4,
    category: "General",
    question: "How much does it cost?",
    answer: "It's free to attend (as long as you register).",
  },
  {
    id: 5,
    category: "General",
    question: "Do I need experience to participate?",
    answer:
      "Nope. If you're brand new, you'll still be able to build something. We'll have mentors, beginner-friendly ideas, and teammates who can help.",
  },

  // -------- Teams & Build --------
  {
    id: 6,
    category: "Teams & Build",
    question: "Can I join without a team?",
    answer:
      "Yes. You can: Come with friends, Build solo, Or find a team during team-forming at the start.",
  },
  {
    id: 7,
    category: "Teams & Build",
    question: "How big can teams be?",
    answer:
      "Usually 1–4 people per team (common hackathon standard). If you want bigger teams, keep it reasonable and aligned with the rules we post.",
  },
  {
    id: 8,
    category: "Teams & Build",
    question: "What can I build?",
    answer:
      "Anything you can demo by the end: software, hardware, AI, design prototypes, tools, games, websites—anything creative and buildable within the time.",
  },
  {
    id: 13,
    category: "Teams & Build",
    question: "What are mentors and how do they help?",
    answer:
      "Mentors are volunteers who can help with: brainstorming project ideas, debugging code, pitching and demo prep, UI/UX feedback. They won't build your project for you, but they'll help you move faster.",
  },
  {
    id: 16,
    category: "Teams & Build",
    question: "What if I don't finish my project?",
    answer:
      "Totally normal. You can still demo what you have. Hackathons are about learning, building, and trying ideas fast.",
  },

  // -------- Logistics & Rules --------
  {
    id: 9,
    category: "Logistics & Rules",
    question: "What should I bring?",
    answer:
      "Bring: Laptop + charger, Any hardware you want to use (Arduino, sensors, etc.), Headphones (recommended), Water bottle, Optional: hoodie/blanket if you plan to stay late.",
  },
  {
    id: 10,
    category: "Logistics & Rules",
    question: "Will there be food?",
    answer:
      "Yes—meals + snacks will be provided during the event. We'll also include options for common dietary needs (you'll mark preferences during registration).",
  },
  {
    id: 11,
    category: "Logistics & Rules",
    question: "Where do I sleep?",
    answer:
      "We will have designated sleeping rooms. You are welcome to sleep in the classrooms where you work too",
  },
  {
    id: 12,
    category: "Logistics & Rules",
    question: "Do I have to stay the entire time?",
    answer:
      "No. You can take breaks, go home, and return—as long as your team submits on time and follows event rules.",
  },
  {
    id: 14,
    category: "Logistics & Rules",
    question: "How do submissions work?",
    answer:
      "Teams will submit: a short project description, demo video or live demo (depending on final format), a link to the code (GitHub encouraged). We'll share the exact submission platform closer to the event.",
  },
  {
    id: 15,
    category: "Logistics & Rules",
    question: "How does judging work?",
    answer:
      "Judges will look at things like: creativity / originality, technical difficulty, usefulness / impact, quality of demo and explanation. You don't need a 'perfect' project—just show what you built and what you learned.",
  },
  {
    id: 17,
    category: "Logistics & Rules",
    question: "Is there a code of conduct?",
    answer:
      "Yes. CougarHacks is an inclusive event. Be respectful, collaborate kindly, and help make it welcoming for everyone. Any harassment or discrimination isn't tolerated.",
  },
  {
    id: 18,
    category: "Logistics & Rules",
    question: "How can I volunteer or sponsor?",
    answer:
      "We'd love help. Volunteers can support check-in, food, help desk, Discord support, mentors, and more. Sponsors can support prizes, meals, and swag. Check the site for the volunteer/sponsor forms.",
  },
    {
    id: 19,
    category: "Logistics & Rules",
    question: "Can high school students or participants under 18 attend?",
    answer:
      "Yes. High school students are welcome to participate. However, for safety reasons, participants under 18 cannot stay overnight. They must leave the venue between 12:00 AM and 5:00 AM and may return in the morning.",
  },
  {
    id: 20,
    category: "Logistics & Rules",
    question: "Where will the hackathon take place?",
    answer:
      "CougarHacks will be hosted at Caldwell University, located at 120 Bloomfield Avenue, Caldwell, NJ 07006.",
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
    <section id="faq" className="relative min-h-screen bg-gradient-to-b from-[#071225] via-[#050A14] to-[#02040A] z-[90] flex flex-col">
      {/* Title */}
      <h1 className="text-white text-[calc(1.8rem+3px)] sm:text-[calc(2.2rem+3px)] md:text-[calc(2.8rem+3px)] lg:text-[calc(3.5rem+3px)] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit uppercase">
        FAQ
      </h1>

      <div className="w-full px-4 md:px-6 lg:px-10 py-8 max-w-[1400px] mx-auto">

        {/* ================= TABS (ONE LINE) ================= */}
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
                className={`
                  flex-shrink-0
                  px-5 py-3
                  border-2 border-brand rounded-lg
                  font-content font-bold uppercase text-sm tracking-wide
                  transition-all duration-200
                  ${isActive ? "bg-brand text-white" : "bg-white text-brand hover:bg-[#f5f5f5]"}
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ================= FAQ LIST FULL WIDTH ================= */}
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
                  <p className="text-base font-content text-brand mt-3">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
