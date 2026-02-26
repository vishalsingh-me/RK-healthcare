/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B1F3A",
          dark: "#08162B",
        },
        accent: {
          DEFAULT: "#B8966E",
          soft: "#C8AA84",
        },
        surface: "#F7F5F2",
        text: {
          DEFAULT: "#1A1A1A",
          muted: "#6B7280",
        },
        border: "#E5E0D8",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 38px -30px rgba(11, 31, 58, 0.35)",
        soft: "0 20px 52px -38px rgba(11, 31, 58, 0.45)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
