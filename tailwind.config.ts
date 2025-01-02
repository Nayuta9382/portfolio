import type { Config } from "tailwindcss";
import textShadowPlugin from 'tailwindcss-textshadow';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'rb': '2px 2px 3px 0px rgba(0, 0, 0, 0.25)',
        '3xl': '4px 4px 5px 0px rgba(0, 0, 0, 0.15)',
        'all-sm': '1px 1px 3px 2.5px rgba(0, 0, 0, 0.15)',
        'all-r': '1px 1px 3px 2.5px rgba(0, 0, 0, 0.25)',
      },
      screens:{
        'ss':'500px'
      },
      textShadow: {
        md: '2px 2px 4px rgba(0, 0, 0, 0.25)', // 小さい影
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
} satisfies Config;
