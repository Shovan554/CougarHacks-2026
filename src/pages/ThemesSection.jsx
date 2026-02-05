export default function ThemesSection() {
  return (
    <section
      id="themes"
      className="relative min-h-screen bg-gradient-to-b from-[#162A55] via-[#2B1F4D] to-[#3B1B6D]"
    >
      <h1 className="absolute top-0 left-0 text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-logo font-bold border-b-[3px] border-brand pb-[15px] mt-5 md:mt-10 ml-4 md:ml-6 w-fit uppercase">
        Themes
      </h1>

      <div className="flex items-center justify-center grow w-full px-4 md:px-5 lg:px-6 box-border">
        <div className="bg-white border-[3px] border-brand rounded-xl py-[25px] px-[30px] sm:py-[30px] sm:px-[40px] md:py-[35px] md:px-[50px] lg:py-10 lg:px-[60px] text-center max-w-[500px] w-full">
          <p className="text-brand text-lg sm:text-[20px] md:text-2xl lg:text-[28px] font-bold m-0 leading-[1.4]">
            Themes Out Soon
          </p>
        </div>
      </div>
    </section>
  );
}
