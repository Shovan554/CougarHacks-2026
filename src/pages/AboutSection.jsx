export default function AboutSection() {
  const stats = [
    { label: "Participants", value: "80+", rotation: "-rotate-2" },
    { label: "In Prizes", value: "$1000", rotation: "rotate-3" },
    { label: "Hackathon", value: "24 Hours", rotation: "-rotate-1" },
  ];

  const features = [
    { text: "$2000 grand prize and more from our sponsors", rotation: "rotate-2" },
    { text: "36 hour hackathon", rotation: "-rotate-1" },
    { text: "games and karoke", rotation: "rotate-1" },
  ];

  return (
    <section
      id="about"
      className="
        sticky top-0
        min-h-screen
        z-60
        -mt-24
        flex flex-col
        bg-linear-to-b from-[#000000] via-[#0A1022] to-[#162A55]
        pb-20
      "
    >
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col grow">
        {/* Title */}
        <h1 className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit mb-[30px] uppercase">
          About
        </h1>

        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-[30px] lg:gap-10 px-4 md:px-5 lg:px-6 max-w-[2000px] mx-auto w-full box-border items-center mb-16">
          {/* Description Box */}
          <div className="flex-1 min-w-0 bg-white border-[3px] border-brand rounded-xl p-6 box-border">
            <p className="text-black text-sm sm:text-[15px] md:text-base lg:text-2xl leading-normal sm:leading-[1.6] lg:leading-[1.8] font-content font-medium mb-3.5 lg:mb-[18px]">
              CougarHacks is a 36-hour hackathon at Caldwell University where
              students team up to design, build, and launch real projects in a
              single weekend. Open to all universities and all skill levels, it’s
              a space to learn, create, and have fun — with mentors, workshops,
              prizes, and plenty of snacks. Walk in with an idea, walk out with
              something you’re proud to put on GitHub.
            </p>
          </div>

          {/* New Feature Boxes on the Right */}
          <div className="flex-1 min-w-0 w-full flex flex-wrap gap-4 justify-center md:justify-start items-center md:items-start">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`
                  ${feature.rotation}
                  bg-brand
                  border-[3px] border-white
                  px-4 py-10 rounded-xl
                  shadow-[6px_6px_0px_rgba(255,255,255,0.2)]
                  hover:rotate-0 hover:scale-[1.3]
                  transition-transform duration-300
                  flex items-center justify-center text-center
                  w-full max-w-[220px] min-h-[140px]
                `}
              >
                <span className="text-white text-base sm:text-lg lg:text-xl font-bold uppercase tracking-tight">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2025 Recap Section (Moved Below) */}
        <div className="w-full flex flex-col items-center justify-center gap-6 py-10 px-4">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-wider text-center">
            CougarHacks 2025 Recap
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
                  ${stat.rotation}
                  bg-white
                  border-[3px] border-brand
                  p-6 rounded-2xl
                  shadow-[8px_8px_0px_rgba(205,20,20,0.2)]
                  hover:rotate-0
                  transition-transform duration-300
                  flex flex-col items-center justify-center
                  min-w-[180px]
                `}
              >
                <span className="text-brand text-4xl sm:text-5xl font-black mb-1">
                  {stat.value}
                </span>
                <span className="text-brand/90 text-sm sm:text-base font-bold uppercase tracking-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
}
