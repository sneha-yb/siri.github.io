/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f6f8",
          100: "#e2e8ef",
          200: "#c5d0de",
          300: "#9aadc4",
          400: "#6f86a3",
          500: "#526a89",
          600: "#405570",
          700: "#35465d",
          800: "#2f3c4f",
          900: "#1a2330",
          950: "#0f141c",
        },
        accent: {
          DEFAULT: "#c4a574",
          muted: "#9d8a6a",
          glow: "rgba(196, 165, 116, 0.35)",
        },
      },
      fontFamily: {
        sans: ["Roboto Mono", "ui-monospace", "monospace"],
        display: ["Roboto Mono", "ui-monospace", "monospace"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
