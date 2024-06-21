import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "main-color": "#121212",
      },
<<<<<<< Updated upstream
=======
      fontFamily: {
        manrope: "var(--font-manrope)",
      },
      colors: {
        "about-bg": "#27272a",
      },
>>>>>>> Stashed changes
    },
  },
  plugins: [],
};
export default config;
