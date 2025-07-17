import { useEffect, useRef } from "react";
import anime from "animejs";
import image from "../assets/favicon.png"; // Adjust the path as necessary

const Logo = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const feTurbulence = svgRef.current.querySelector("feTurbulence");
    const feDisplacementMap = svgRef.current.querySelector("feDisplacementMap");

    anime({
      targets: feTurbulence,
      baseFrequency: [0.01, 0.05],
      duration: 3000,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });

    anime({
      targets: feDisplacementMap,
      scale: [5, 20],
      duration: 3000,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <div className="w-32 h-32 mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            numOctaves="2"
            baseFrequency="0.01"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <image
          href= { image } // <-- Make sure this path is correct based on your public/assets structure
          x="0"
          y="0"
          width="128"
          height="128"
          filter="url(#displacementFilter)"
        />
      </svg>
    </div>
  );
};

export default Logo;
