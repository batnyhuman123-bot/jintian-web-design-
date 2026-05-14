import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jintian: {
          cream: "#FAF7F2",
          mahogany: "#420D09",
          black: "#000000",
          white: "#FFFFFF",
          bronze: "#B8956A",
          "bronze-deep": "#8A6A42",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        luxury: "0.28em",
        nav: "0.14em",
        label: "0.22em",
      },
      boxShadow: {
        luxury:
          "0 32px 80px -24px rgba(66, 13, 9, 0.18), 0 12px 32px -16px rgba(0,0,0,0.12)",
        glass:
          "0 8px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.45)",
        lift: "0 24px 60px -20px rgba(66, 13, 9, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,255,255,0.08) 0%, transparent 55%)",
        "mahogany-depth":
          "linear-gradient(165deg, #4a120d 0%, #420D09 45%, #2a0806 100%)",
        "footer-depth":
          "linear-gradient(180deg, #4a120d 0%, #420D09 40%, #1a0504 100%)",
        "bronze-line":
          "linear-gradient(90deg, transparent, rgba(184,149,106,0.9), transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "scroll-hint": {
          "0%, 100%": { opacity: "0.35", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-2%)" },
          "30%": { transform: "translate(2%,-1%)" },
          "50%": { transform: "translate(-1%,2%)" },
          "70%": { transform: "translate(2%,1%)" },
          "90%": { transform: "translate(-2%,2%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        grain: "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
