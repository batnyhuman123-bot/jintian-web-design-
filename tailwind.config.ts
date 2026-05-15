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
          showcase: {
            bg: "#340D07",
            gold: "#C89B5A",
            text: "#F5EFE8",
            bronze: "#6A3A1F",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        luxury: "0.32em",
        nav: "0.2em",
        label: "0.28em",
        editorial: "0.02em",
      },
      boxShadow: {
        /** Soft brochure-style depth */
        editorial:
          "0 2px 24px -4px rgba(0,0,0,0.06), 0 12px 40px -16px rgba(66,13,9,0.06)",
        card: "0 1px 0 rgba(0,0,0,0.04), 0 20px 50px -28px rgba(0,0,0,0.08)",
        lift: "0 12px 40px -18px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(255,255,255,0.06) 0%, transparent 58%)",
        "mahogany-depth":
          "linear-gradient(180deg, #4a120d 0%, #420D09 42%, #2c0a07 100%)",
        "footer-depth":
          "linear-gradient(180deg, #3a0f0b 0%, #420D09 38%, #1a0604 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        float: "float 10s ease-in-out infinite",
        marquee: "marquee 56s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
