import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        her: {
          primary: "#E55B6E", // Rose Coral from reference screenshots
          primaryHover: "#D44A5D",
          primaryDark: "#B83A4C",
          primaryLight: "#FCE8EB",
          secondary: "#8CBF3F", // Brand Leaf Green
          secondaryHover: "#7CB342",
          secondaryLight: "#F1F8E9",
          blush: "#FFF8F6", // Light warm background
          blushCard: "#FFF4F0",
          warmText: "#3D272A",
          dark: "#0F172A",
          darkMuted: "#1E293B",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
