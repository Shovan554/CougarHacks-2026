import caldwellLogo from "../assets/images/caldwellLogo.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/25 backdrop-blur-lg border-t border-white/10 z-110 pointer-events-auto">
      <div className="flex justify-between items-center w-full px-[18px] py-3 sm:px-6 sm:py-4 box-border">

        {/* LEFT SIDE — Instagram */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="https://www.instagram.com/cougarhacks_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white no-underline transition-all duration-180 p-1.5 sm:p-2 sm:px-3 rounded-lg hover:text-brand hover:scale-110"
            aria-label="Instagram"
          >
            <span className="text-white text-xs sm:text-sm">
              Follow us on Instagram
            </span>

           
          </a>
        </div>

        {/* RIGHT SIDE — Hosted by + Logo */}
        <a
          href="https://www.caldwell.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-xs sm:text-sm hover:scale-105 transition"
          aria-label="Hosted by Caldwell University"
        >
          <span>Hosted by</span>
          <img
            src={caldwellLogo}
            alt="Caldwell University"
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </a>

      </div>
    </footer>
  );
}
