import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      None: "100%",
      xs: { min: "200px", max: "500px" },
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        SiteColor: "#1563df",
        Title: "#161e2d",
        Desc: "#5c6368",
        BorderColor: "[rgb(231,232,233)]",
      },

      boxShadow: {
        cardShadow: "0 0 15px rgba(0, 0, 0, 0.15)",
      },
      container: {
        center: true, // يجعل الكونتينر في المنتصف
        padding: "1rem", // تضيف بعض الفراغات الجانبية
      },
    },
  },
  plugins: [],
});
export default config;
