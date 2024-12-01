import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'ml-3',
    'ml-6',
    'text-sm',
    'text-xs',
    'list-disc',
    'list-circle',
    'list-square',
    'mt-1',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      listStyleType: {
        circle: 'circle',
        square: 'square',
      },
    },
  },
  plugins: [],
} satisfies Config;
