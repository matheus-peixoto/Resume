import type { Config } from "tailwindcss";

const colorRole = (name: string) => `oklch(var(--${name}) / <alpha-value>)`;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colorRole("bg"),
        foreground: colorRole("ink"),
        meta: colorRole("meta"),
        body: colorRole("body"),
        muted: colorRole("faint"),
        border: colorRole("rule"),
        wash: colorRole("wash"),
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        pixel: [
          "var(--font-geist-pixel-square)",
          "var(--font-geist-mono)",
          "monospace",
        ],
      },
      listStyleType: {
        circle: 'circle',
        square: 'square',
      },
    },
  },
  plugins: [],
} satisfies Config;
