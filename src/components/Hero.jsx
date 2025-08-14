// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import logo from "../assets/shadowStackLogo.svg?raw"; // or ...-tall.svg?raw

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = logo;

    const svg = ref.current.querySelector("svg");
    anime({
      targets: svg,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 800,
      easing: "easeOutQuad",
    });
  }, []);

  return (
    // Neutral wrapper — avoid text sizing classes here
   // Hero.jsx (wrapper)
<div className="mt-6 flex justify-center">
  <div ref={ref} className="w-full max-w-[1440px] px-0" />
</div>

  );
}
