import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingScreen from "./pages/LoadingScreen";
import AboutSection from "./pages/AboutSection";
import ThemesSection from "./pages/ThemesSection";
import SponsorsSection from "./pages/SponsorsSection";
import FAQSection from "./pages/FAQSection";
import ItinerarySection from "./pages/ItinerarySection";

import mountainsFront from "./assets/images/mountains_front.png";
import cloud from "./assets/images/cloud.jpg";
import logo from "./assets/images/logo.png";

export default function App() {
  const layerRef = useRef(null);
  const bgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  /* ---------------- Mouse Parallax ---------------- */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;

      bgRef.current.style.transform = `translate3d(${-moveX}px, ${-moveY}px, 0) scale(1.1)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ---------------- Loading Screen ---------------- */
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  /* ---------------- Scroll Animation ---------------- */
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let raf = 0;

    const update = () => {
      const h = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / h));

      const scale = 1 - p * 0.05;
      layer.style.transform = `scale(${scale})`;

      layer.style.opacity = String(1 - p);

      const frontY = -p * h * 0.8;
      layer.style.setProperty("--frontY", `${frontY}px`);

      if (p >= 1) {
        layer.style.pointerEvents = "none";
        layer.style.visibility = "hidden";
      } else {
        layer.style.pointerEvents = "auto";
        layer.style.visibility = "visible";
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && <LoadingScreen />}
      <NavBar />
      <Footer />

      {/* Hero Layer */}
      <div
        ref={layerRef}
        className="fixed inset-0 z-30 overflow-hidden will-change-transform touch-pan-y pointer-events-auto"
      >
        <div className="relative w-full h-full">

          {/* Background Cloud */}
          <img
            ref={bgRef}
            src={cloud}
            alt="Background Cloud"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Title + Logo */}
          <div className="absolute inset-0 -top-[80px] z-[10]">

            <div
              className="
                absolute top-[40%] left-1/2 -translate-y-1/2
                -translate-x-1/2
                min-[1000px]:-translate-x-[calc(50%+150px)]
                font-logo text-black uppercase text-center
              "
            >
              <div className="flex flex-col items-center">
                <span className="text-brand text-[3.2rem] sm:text-[4.3rem] lg:text-[10rem] leading-[0.8] tracking-[2px]">
                  COUGAR
                </span>
                <span className="text-black text-[3.2rem] sm:text-[4.3rem] lg:text-[10rem] leading-[0.8] tracking-[2px] z-[30]">
                  HACKS
                </span>
              </div>
            </div>

            <img
              src={logo}
              alt="CougarHacks Logo"
              className="
                object-contain
                absolute top-[40%] left-1/2
                translate-x-[210px] -translate-y-1/2
                w-[120px] sm:w-[280px] lg:w-[450px]
                max-[850px]:top-4 max-[850px]:left-4
                max-[850px]:translate-x-0 max-[850px]:-translate-y-[calc(10%-80px)]
                max-[850px]:w-[90px]
              "
            />
          </div>

          {/* Mountains (moved UP 10px ONLY) */}
          <img
            src={mountainsFront}
            alt="Mountains Front"
            className="absolute bottom-[-60px] left-0 w-full h-auto z-[20] will-change-transform pointer-events-none"
            style={{ transform: `translate3d(0, var(--frontY, 0px), 0)` }}
          />

          {/* Date + Button */}
          <div className="absolute inset-0 z-[30]">
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="font-logo text-black text-center pointer-events-none mb-5">
                <span className="whitespace-nowrap text-[0.9rem] sm:text-[1.4rem] lg:text-[5rem] font-medium tracking-[1px]">
                  2026 April 25-26
                </span>
              </div>

              <a
                href="https://cougarhacksportal.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-brand hover:bg-[#e31616] active:translate-y-1 text-white px-6 py-3 sm:px-12 sm:py-5 text-[0.9rem] sm:text-[1.4rem] font-extrabold uppercase tracking-[1.5px] rounded-xl cursor-pointer shadow-[0_8px_0_var(--color-brand-dark)] hover:shadow-[0_10px_0_var(--color-brand-dark)] active:shadow-[0_3px_0_var(--color-brand-dark)] transition-all duration-100 slide-up inline-block text-center"
              >
                Register Now
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Spacer (unchanged page size) */}
      <div className="h-[120vh] pointer-events-none" />

      {/* Sections */}
      <AboutSection />
      <ThemesSection />
      <SponsorsSection />
      <FAQSection />
      <ItinerarySection />
    </div>
  );
}
