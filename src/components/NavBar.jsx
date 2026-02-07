import { useLayoutEffect, useRef, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home", target: 0 },
  { label: "About", href: "#about", target: 1 },
  { label: "Themes", href: "#themes", target: 2 },
  { label: "Sponsors", href: "#sponsors", target: 3 },
  // { label: "Team", href: "#team", target: 4 },
  { label: "FAQ", href: "#faq", target: 5 },
  { label: "Itinerary", href: "#itinerary", target: 6 },
];

export default function NavBar({ onNavigate }) {
  const ulRef = useRef(null);
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // desktop hover pill
  const [pill, setPill] = useState({ x: 0, y: 0, w: 0, h: 0, opacity: 0 });

  // mobile hamburger
  const [isOpen, setIsOpen] = useState(false);

  // Intersection Observer to track active section
  useLayoutEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = LINKS.findIndex((link) => link.href === `#${id}`);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const measureTo = (index, show = true) => {
    const ul = ulRef.current;
    const el = linkRefs.current[index];
    if (!ul || !el) return;

    const ulRect = ul.getBoundingClientRect();
    const aRect = el.getBoundingClientRect();

    setPill({
      x: aRect.left - ulRect.left,
      y: aRect.top - ulRect.top,
      w: aRect.width,
      h: aRect.height,
      opacity: show ? 1 : 0,
    });
  };

  useLayoutEffect(() => {
    const onResize = () => {
      // ✅ close mobile menu if switching to desktop layout (>= 900px)
      if (window.innerWidth >= 900) setIsOpen(false);

      // if pill is visible, re-measure
      if (pill.opacity === 1) measureTo(activeIndex, true);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, pill.opacity]);

  const goTo = (idx) => {
    setActiveIndex(idx);

    if (idx === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate(LINKS[idx].target);
    } else {
      const id = LINKS[idx].href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile menu after navigation
    setIsOpen(false);
  };

  const handleClick = (e, idx) => {
    e.preventDefault();
    goTo(idx);
  };

  return (
    <nav className="fixed top-5 left-0 w-full z-[1000] bg-transparent pointer-events-none">
      <div className="w-full flex justify-center items-center gap-5 relative pointer-events-auto">
        {/* ✅ Mobile hamburger (hidden on screens >= 900px) */}
        <button
          className="min-[900px]:hidden fixed top-[18px] right-[18px] z-[1202] w-[52px] h-[52px] rounded-full border border-white/12 bg-black/35 backdrop-blur-lg flex items-center justify-center cursor-pointer pointer-events-auto"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="block w-[22px] h-0.5 bg-white relative before:content-[''] before:absolute before:left-0 before:w-[22px] before:h-0.5 before:bg-white before:top-[-7px] after:content-[''] after:absolute after:left-0 after:w-[22px] after:h-0.5 after:bg-white after:top-[7px]" />
        </button>

        {/* Desktop nav + Mobile dropdown uses same UL */}
        <ul
          ref={ulRef}
          className={`
            flex list-none m-0 transition-all duration-200

            /* ✅ Desktop styles at >= 900px */
            min-[900px]:static min-[900px]:flex-row min-[900px]:max-w-none min-[900px]:opacity-100 min-[900px]:translate-y-0 min-[900px]:pointer-events-auto min-[900px]:gap-[14px]
            min-[900px]:rounded-[50px] min-[900px]:bg-black/25 min-[900px]:backdrop-blur-lg min-[900px]:border min-[900px]:border-white/10 min-[900px]:py-3.5 min-[900px]:px-[22px]

            /* ✅ Mobile dropdown base (below 900px) */
            fixed top-[78px] left-[18px] right-[18px] max-w-[420px] flex-col items-stretch gap-2.5 p-3.5 rounded-[20px] bg-black/35 backdrop-blur-lg border border-white/10

            ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto z-[1201]"
                : "opacity-0 -translate-y-2 pointer-events-none min-[900px]:opacity-100 min-[900px]:translate-y-0 min-[900px]:pointer-events-auto"
            }
          `}
          onMouseLeave={() => setPill((p) => ({ ...p, opacity: 0 }))}
        >
          {/* Desktop hover pill (hidden below 900px) */}
          <span
            className="absolute left-0 top-0 rounded-full bg-brand shadow-[0_0_20px_rgba(205,20,20,0.25)] transition-all duration-[240ms] z-0 pointer-events-none hidden min-[900px]:block"
            style={{
              transform: `translate3d(${pill.x}px, ${pill.y}px, 0)`,
              width: `${pill.w}px`,
              height: `${pill.h}px`,
              opacity: pill.opacity,
            }}
            aria-hidden="true"
          />

          {LINKS.map((l, idx) => (
            <li key={l.label} className="relative z-[1]">
              <a
                ref={(node) => (linkRefs.current[idx] = node)}
                href={l.href}
                data-target={l.target}
                className={`
                  text-white text-base min-[900px]:text-lg font-logo font-bold no-underline py-2.5 px-3.5 min-[900px]:px-[18px] rounded-full inline-flex items-center justify-center transition-transform duration-180 relative hover:-translate-y-0.5
                  w-full min-[900px]:w-auto justify-start min-[900px]:justify-center

                  after:content-[''] after:absolute after:left-[18px] after:right-[18px] after:bottom-1.5 after:h-[2px] after:rounded-[2px] after:bg-white after:transition-all after:duration-220 after:origin-center
                  ${idx === activeIndex ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                `}
                onMouseEnter={() => measureTo(idx, true)}
                onFocus={() => measureTo(idx, true)}
                onClick={(e) => handleClick(e, idx)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Click outside to close on mobile (< 900px) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1100] bg-black/35 backdrop-blur-[2px] min-[900px]:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
