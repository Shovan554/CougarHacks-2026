import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  const layerRef = useRef(null);

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
      {/* Navbar must be OUTSIDE the spline layer so it can sit above it */}
      <NavBar />

      {/* Spline stays fixed and slides up as you scroll */}
      <div ref={layerRef} className="splineLayer">
        <main className="splineFixed splineZoom">
          <Spline scene="https://prod.spline.design/vBRDJw-I4bvaLp3u/scene.splinecode" />
        </main>
      </div>

      {/* This creates the first "screen" height so you can scroll */}
      <div className="spacer" />

      {/* Next page content */}
      <section className="nextSection">
        <div className="contentWrap">
          <h1>Content goes here</h1>
          <p>Pitch black section.</p>
        </div>
      </section>
    </div>
  );
}
