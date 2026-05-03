import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--obsidian)",
        charcoal: "var(--charcoal)",
        surface: "var(--surface)",
        "border-subtle": "var(--border-subtle)",
        "gold-dim": "var(--gold-dim)",
        "gold-mid": "var(--gold-mid)",
        "gold-bright": "var(--gold-bright)",
        "gold-glow": "var(--gold-glow)",
        "gold-shimmer": "var(--gold-shimmer)",
        "white-pure": "var(--white-pure)",
        "white-soft": "var(--white-soft)",
        "white-muted": "var(--white-muted)",
        "white-dim": "var(--white-dim)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
