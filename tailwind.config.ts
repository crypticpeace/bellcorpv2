import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#242663",
          light: "#343779",
          dark: "#1A1C4A",
          deep: "#111233",
        },
        coral: {
          DEFAULT: "#E74862",
          light: "#FF7A8E",
          dark: "#C42744",
        },
        // alias kept so any legacy `gold` class still resolves to brand coral
        gold: {
          DEFAULT: "#E74862",
          light: "#FF7A8E",
          dark: "#C42744",
        },
        blush: "#FFF4F6",
        cream: "#FFF4F6",
        line: "#E6E7EF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      // flat, restrained elevation — no coloured glows
      boxShadow: {
        card: "0 1px 2px rgba(36,38,99,0.04)",
        hover: "0 8px 24px -12px rgba(36,38,99,0.18)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up .6s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
} satisfies Config;
