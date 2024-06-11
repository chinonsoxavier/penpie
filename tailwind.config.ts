import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*",
  ],
  theme: {
    extend: {
      colors: {
        interface: "#f2ccba",
        secondary: "#f43127",
        primary: "#fcb302",
        interface2: "#f4ecdf",
        border: "#EDDFC6",
        textLight: "#7a7a7a",
      },
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      mobile: { min: "0px", max: "410px" },
      medium: { max: "580px" },
      tablet: { max: "768px" },
      base: { max: "998px" },
      Xlarge: { max: "1200px" },
      large: "998px",
      lg: "1024px",
      xl: "1200px",
      xl2: "1536px",
    },
    backgroundSize:{
      "100":"100%",
      "120":"120%"
    }
  },
  plugins: [],
};
export default config;
