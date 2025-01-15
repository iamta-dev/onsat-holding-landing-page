import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B42",
        secondary: "#2B3674",
        accent: "#E0E0E0",
        text: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
          muted: "#717171",
        },
      },
      fontFamily: {
        heading: ["Noto Sans Thai", "sans-serif"],
        body: ["Prompt", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
