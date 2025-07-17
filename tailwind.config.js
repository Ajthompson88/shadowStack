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
          50: "#f8f8f8",
          100: "#e0e0e0",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#616161",
          500: "#424242",
          600: "#2e2e2e",
          700: "#212121",
          800: "#121212",
          900: "#0a0a0a",
          950: "#050505"
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
