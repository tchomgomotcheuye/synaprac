import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7EF",
        ink: "#1E2119",
        green: {
          900: "#17491C",
          700: "#2C7A34",
          600: "#358C3E",
          500: "#49A652",
          100: "#E7F2E4",
        },
        amber: {
          600: "#C9861F",
          500: "#E5A13A",
        },
        brown: {
          900: "#402A16",
          700: "#6B4423",
        },
        line: "#E4DFD1",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "63% 37% 54% 46% / 43% 47% 53% 57%",
        "blob-alt": "42% 58% 61% 39% / 51% 41% 59% 49%",
        organic: "6px 22px 6px 22px",
        "organic-lg": "6px 40px 6px 40px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
