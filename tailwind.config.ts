import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        carbon: {
          900: "#0d0d0d",
          800: "#1a1a1a",
          700: "#262626",
          600: "#333333",
        },
        steel: {
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
        },
        amber: {
          cta: "#f59e0b",
          "cta-hover": "#d97706",
          light: "#fbbf24",
        },
        electric: {
          blue: "#3b82f6",
          "blue-dim": "#60a5fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "blueprint-pattern":
          "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
        "metal-texture":
          "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)",
      },
      backgroundSize: {
        blueprint: "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
