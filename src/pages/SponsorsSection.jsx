export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative bg-gradient-to-b from-[#3B1B6D] via-[#1A2146] to-[#071225] z-80 flex flex-col items-center py-16 md:py-24">
      <h1 className="text-white text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-logo font-bold border-b-[3px] border-brand pb-[15px] ml-4 md:ml-6 w-fit uppercase mb-12 self-start">
        Sponsors
      </h1>
      
      <div className="flex items-center justify-center w-full px-4 md:px-6 box-border">
        <button className="relative bg-brand hover:bg-[#e31616] active:translate-y-1 text-white px-8 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-4.5 text-[0.95rem] sm:text-[1.1rem] lg:text-[1.2rem] font-extrabold uppercase tracking-[1px] rounded-xl cursor-pointer shadow-[0_6px_0_var(--color-brand-dark)] hover:shadow-[0_8px_0_var(--color-brand-dark)] active:shadow-[0_2px_0_var(--color-brand-dark)] transition-all duration-100">
          Become a Sponsor
        </button>
      </div>
    </section>
  );
}
