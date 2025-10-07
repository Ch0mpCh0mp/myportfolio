import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // neu: ab 480px
        sm: "640px", // große Handys / kleine Tablets
        md: "768px", // Tablets / kleine Laptops
        lg: "1024px", // Desktop
        xl: "1280px", // große Desktops
        "2xl": "1536px", // sehr große Bildschirme
      },
      colors: {
        navy: "#001F54",
        deeppink: "#ff1493",
        darkorange: "#ff8c00",
        darkcyan: "#008b8b",
        bluegray: "#2B5D6E",
        lightcoral: "#f08080",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
