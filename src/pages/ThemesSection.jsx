export default function ThemesSection() {
  return (
    <section
      id="themes"
      className="
        relative
        flex flex-col
        items-center
        bg-gradient-to-b
        from-[#162A55]
        via-[#2B1F4D]
        to-[#3B1B6D]
        px-4 md:px-6
        py-16 md:py-24
      "
    >
      {/* Title (NORMAL FLOW, not absolute) */}
      <h1 className="
        text-white
        text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem]
        font-logo font-bold
        border-b-[3px] border-brand
        pb-[15px]
        uppercase
        mb-10
        self-start
      ">
        Themes
      </h1>

      {/* Banner BELOW title */}
      <div className="w-full flex justify-center">
        <div className="
          bg-white
          border-[3px] border-brand
          rounded-xl
          py-8 px-10
          text-center
          max-w-[500px]
          w-full
          shadow-lg
        ">
          <p className="text-brand text-lg sm:text-xl md:text-2xl font-bold">
            Themes Out Soon
          </p>
        </div>
      </div>
    </section>
  );
}
