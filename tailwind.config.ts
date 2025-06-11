import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
      colors: {
        orange: "#F69520",
        darkBlue: "#1D2554",
      },
    },
  },
  plugins: [],
};
export default config;