import { useState } from "react";
import Lottie from "lottie-react";
import faqAnimation from "../assets/animations/faq.json";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is CougarHacks?",
    answer: "CougarHacks is a 36-hour hackathon where students team up to build cool projects—apps, websites, hardware hacks, AI tools, games, and more. Come for the building, stay for the vibes, snacks, and demos.",
  },
  {
    id: 2,
    question: "When is it?",
    answer: "April 17–19 (weekend). The detailed schedule (check-in, opening, judging, etc.) will be posted closer to the event.",
  },
  {
    id: 3,
    question: "Who can attend?",
    answer: "This year, students from any university are welcome to join. All skill levels are welcome—beginner to advanced.",
  },
  {
    id: 4,
    question: "How much does it cost?",
    answer: "It's free to attend (as long as you register).",
  },
  {
    id: 5,
    question: "Do I need experience to participate?",
    answer: "Nope. If you're brand new, you'll still be able to build something. We'll have mentors, beginner-friendly ideas, and teammates who can help.",
  },
  {
    id: 6,
    question: "Can I join without a team?",
    answer: "Yes. You can: Come with friends, Build solo, Or find a team during team-forming at the start.",
  },
  {
    id: 7,
    question: "How big can teams be?",
    answer: "Usually 1–4 people per team (common hackathon standard). If you want bigger teams, keep it reasonable and aligned with the rules we post.",
  },
  {
    id: 8,
    question: "What can I build?",
    answer: "Anything you can demo by the end: software, hardware, AI, design prototypes, tools, games, websites—anything creative and buildable within the time.",
  },
  {
    id: 9,
    question: "What should I bring?",
    answer: "Bring: Laptop + charger, Any hardware you want to use (Arduino, sensors, etc.), Headphones (recommended), Water bottle, Optional: hoodie/blanket if you plan to stay late.",
  },
  {
    id: 10,
    question: "Will there be food?",
    answer: "Yes—meals + snacks will be provided during the event. We'll also include options for common dietary needs (you'll mark preferences during registration).",
  },
  {
    id: 11,
    question: "Where do I sleep?",
    answer: "Hackathons are meant to be safe and friendly for staying late. If overnight is allowed at the venue, we'll share the exact resting area rules. If not, you can head home and come back.",
  },
  {
    id: 12,
    question: "Do I have to stay the entire time?",
    answer: "No. You can take breaks, go home, and return—as long as your team submits on time and follows event rules.",
  },
  {
    id: 13,
    question: "What are mentors and how do they help?",
    answer: "Mentors are volunteers who can help with: brainstorming project ideas, debugging code, pitching and demo prep, UI/UX feedback. They won't build your project for you, but they'll help you move faster.",
  },
  {
    id: 14,
    question: "How do submissions work?",
    answer: "Teams will submit: a short project description, demo video or live demo (depending on final format), a link to the code (GitHub encouraged). We'll share the exact submission platform closer to the event.",
  },
  {
    id: 15,
    question: "How does judging work?",
    answer: "Judges will look at things like: creativity / originality, technical difficulty, usefulness / impact, quality of demo and explanation. You don't need a 'perfect' project—just show what you built and what you learned.",
  },
  {
    id: 16,
    question: "What if I don't finish my project?",
    answer: "Totally normal. You can still demo what you have. Hackathons are about learning, building, and trying ideas fast.",
  },
  {
    id: 17,
    question: "Is there a code of conduct?",
    answer: "Yes. CougarHacks is an inclusive event. Be respectful, collaborate kindly, and help make it welcoming for everyone. Any harassment or discrimination isn't tolerated.",
  },
  {
    id: 18,
    question: "How can I volunteer or sponsor?",
    answer: "We'd love help. Volunteers can support check-in, food, help desk, Discord support, mentors, and more. Sponsors can support prizes, meals, and swag. Check the site for the volunteer/sponsor forms.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative min-h-screen bg-black z-90 flex flex-col">
      <h1 className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit mb-0 uppercase">
        FAQ
      </h1>
      
      <div className="flex flex-col md:flex-row gap-5 md:gap-[30px] lg:gap-10 grow px-4 md:px-5 lg:px-6 py-[20px] md:py-[25px] lg:py-[30px] max-w-[1400px] mx-auto w-full box-border items-start">
        <div className="flex-1 min-w-0 md:max-h-[calc(100vh-200px)] md:overflow-y-auto pr-0 md:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-brand [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <div key={item.id} className="bg-white border-2 border-brand rounded-lg overflow-hidden">
                <button
                  className="w-full p-3 sm:p-3.5 md:p-4 bg-white border-none cursor-pointer flex justify-between items-center gap-3 text-[13px] sm:text-sm md:text-[15px] font-semibold text-brand transition-all duration-180 hover:bg-[#f5f5f5]"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={expandedId === item.id}
                >
                  <span className="text-left">{item.question}</span>
                  <svg
                    className={`min-w-[24px] h-6 transition-transform duration-200 text-brand ${expandedId === item.id ? "rotate-180" : ""}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {expandedId === item.id && (
                  <div className="px-3 sm:px-[14px] md:px-4 pb-3 sm:pb-[14px] md:pb-4 border-t border-brand animate-[expandDown_200ms_ease_forwards]">
                    <p className="mt-3 text-brand text-xs sm:text-[13px] md:text-sm leading-[1.5] sm:leading-[1.6]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 min-w-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full flex items-center justify-center">
          <Lottie 
            animationData={faqAnimation} 
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
