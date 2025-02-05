import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#171717',
          100: '#1A1A1A',
          200: '#2A2A2A'
        },
        primary: {
          DEFAULT: '#00F0FF',
          dark: '#00D1E0'
        },
        accent: {
          DEFAULT: '#FF3D00',
          dark: '#CC3000'
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        outfit: ["var(--font-outfit)"],
        "open-sans": ["var(--font-open-sans)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
