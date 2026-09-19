/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        noir: {
          50: "#F8FAFC",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#475569",
          600: "#334155",
          700: "#1E293B",
          800: "#172033",
          900: "#151A23",
          950: "#0F141C",
        },
        
        blueglow: {
          DEFAULT: "#00B2FF",
          light: "#66D8FF", // for hover or soft glow
          dark: "#007ACC"   // optional darker shade
        }
        
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out forwards",
        slideFadeIn: "slideFadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideFadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
      },
      boxShadow: {
        card: "0 24px 70px rgba(0, 0, 0, 0.28)",
      },
    }
  },
  plugins: []
}
