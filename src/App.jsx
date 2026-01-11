import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingScreen from "./pages/LoadingScreen";
import AboutSection from "./pages/AboutSection";
import ThemesSection from "./pages/ThemesSection";
import SponsorsSection from "./pages/SponsorsSection";
import FAQSection from "./pages/FAQSection";
import ItinerarySection from "./pages/ItinerarySection";
import "./App.css";

export default function App() {
  const layerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderSpline, setShouldRenderSpline] = useState(false);

  useEffect(() => {
    // 3 second loading screen
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // 2 second delay before starting Spline to make "look at" smoother
    const splineTimer = setTimeout(() => {
      setShouldRenderSpline(true);
    }, 0);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(splineTimer);
    };
  }, []);

  const onSplineLoad = () => {
    // Dispatch a mousemove event to the center of the screen so Spline's "Look At" starts centered
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    window.dispatchEvent(
      new MouseEvent("mousemove", {
        clientX: x,
        clientY: y,
        bubbles: true,
      }),
    );
  };

  // 1) Slide the whole Spline layer up as the user scrolls down 1 screen
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let raf = 0;

    const update = () => {
      const h = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / h)); // 0..1
      const y = -p * h;

      layer.style.setProperty("--slideY", `${y}px`);

      // After first screen, turn off pointer events so you can interact with content below
      layer.style.pointerEvents = p >= 1 ? "none" : "auto";
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

  // 2) Stop Spline from hijacking wheel scrolling, but still let the PAGE scroll
  // We do that by preventing default on the wheel *inside the spline layer* and manually scrolling the window.
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const forwardWheelToPage = (e) => {
      // only when the wheel happens over the spline layer
      if (!layer.contains(e.target)) return;

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation?.();

      window.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
    };

    layer.addEventListener("wheel", forwardWheelToPage, {
      passive: false,
      capture: true,
    });

    return () => {
      layer.removeEventListener("wheel", forwardWheelToPage, { capture: true });
    };
  }, []);

  return (
    <div className="page">
      {isLoading && <LoadingScreen />}
      {/* Navbar must be OUTSIDE the spline layer so it can sit above it */}
      <NavBar />
      <Footer />

      {/* Spline stays fixed and slides up as you scroll */}
      <div ref={layerRef} className="splineLayer">
        <main className="splineFixed splineZoom">
          {shouldRenderSpline && (
            <div className="spline-content">
              <Spline
                scene="https://prod.spline.design/vBRDJw-I4bvaLp3u/scene.splinecode"
                onLoad={onSplineLoad}
              />
            </div>
          )}
        </main>
        <button className="registerBtn">Register Now</button>
      </div>

      {/* This creates the first "screen" height so you can scroll */}
      <div className="spacer" />

      {/* About Section with 3D Model */}
      <AboutSection />

      {/* Themes Section */}
      <ThemesSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Team Section */}
      <section id="team" className="pageSection">
        <div className="contentWrap">
          <h1>Team</h1>
          <p></p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Itinerary Section */}
      <ItinerarySection />

     
    </div>
  );
}
