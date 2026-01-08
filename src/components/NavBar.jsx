import { useLayoutEffect, useRef, useState } from "react";
import "./NavBar.css";

const LINKS = [
  { label: "Home", href: "#home", target: 0 },
  { label: "About", href: "#about", target: 1 },
  { label: "Themes", href: "#themes", target: 2 },
  { label: "Sponsors", href: "#sponsors", target: 3 },
  { label: "Team", href: "#team", target: 4 },
  { label: "FAQ", href: "#faq", target: 5 },
   {label: "Itenerary", href: "#itinerary", target: 6 },
];

export default function NavBar({ onNavigate }) {
  const ulRef = useRef(null);
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // desktop hover pill
  const [pill, setPill] = useState({ x: 0, y: 0, w: 0, h: 0, opacity: 0 });

  // mobile hamburger
  const [isOpen, setIsOpen] = useState(false);

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
      // close mobile menu if switching layouts
      if (window.innerWidth >= 600) setIsOpen(false);

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
    <nav className="navbar">
      <div className="navbarInner">
        {/* Mobile hamburger (only shown <600px via CSS) */}
        <button
          className="hamburgerBtn"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="hamburgerIcon" />
        </button>

        {/* Desktop nav + Mobile dropdown uses same UL */}
        <ul
          ref={ulRef}
          className={`navList ${isOpen ? "open" : ""}`}
          onMouseLeave={() => setPill((p) => ({ ...p, opacity: 0 }))}
        >
          {/* Desktop hover pill (hidden on mobile via CSS) */}
          <span
            className="navPill"
            style={{
              transform: `translate3d(${pill.x}px, ${pill.y}px, 0)`,
              width: `${pill.w}px`,
              height: `${pill.h}px`,
              opacity: pill.opacity,
            }}
            aria-hidden="true"
          />

          {LINKS.map((l, idx) => (
            <li key={l.label}>
              <a
                ref={(node) => (linkRefs.current[idx] = node)}
                href={l.href}
                data-target={l.target}
                className={idx === activeIndex ? "active" : ""}
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

      {/* Click outside to close on mobile */}
      {isOpen && <div className="mobileBackdrop" onClick={() => setIsOpen(false)} />}
    </nav>
  );
}
