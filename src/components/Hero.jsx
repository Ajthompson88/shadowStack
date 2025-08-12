import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js"; // ✅ Correct ESM entry point
import logo from "../assets/shadowstack-logo?raw";   // ✅ Vite raw loader

export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    anime({
      targets: heroRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: "easeOutQuad"
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="opacity-0 text-white text-4xl font-bold text-center mt-10"
      dangerouslySetInnerHTML={{ __html: logo }}
    />
  );
}
