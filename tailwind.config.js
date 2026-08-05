/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Orbitron", "monospace"]
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
        fadeIn: "fadeIn 1s ease-out forwards",
        slideFadeIn: "slideFadeIn 0.8s ease-out forwards",
        glitch: "glitch 1s infinite",
        glow: 'glow 1.5s ease-in-out forwards'
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
        glow: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
      },
        glitch: {
          "0%": { transform: "translate(0)", opacity: 1 },
          "20%": { transform: "translate(-2px, 2px)", opacity: 0.8 },
          "40%": { transform: "translate(2px, -2px)", opacity: 1 },
          "60%": { transform: "translate(-1px, 1px)", opacity: 0.9 },
          "80%": { transform: "translate(1px, -1px)", opacity: 1 },
          "100%": { transform: "translate(0)", opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
