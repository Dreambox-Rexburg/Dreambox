import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1fr-2fr": "1fr 2fr",
        "2fr-1fr": "2fr 1fr",
      },
      gridTemplateRows: {
        "1fr-2fr": "1fr 2fr",
        "2fr-1fr": "2fr 1fr",
      },
      borderWidth: {
        "1": "1px",
      },
      colors: {
        // Text Colors
        // customTextDarker: "#02020B",
        // customTextDark: "#030211",
        // customTextDefault: "#040316",
        // customTextLight: "#363844",
        // customTextLighter: "#797F96",

        // Primary Colors
        // customPrimaryDarker: "#252D2D",
        customPrimaryDark: "#414E4E",
        customPrimaryDefault: "#6C8282",
        customPrimaryLight: "#9ABABA",
        // customPrimaryLighter: "#C2D6D6",

        // Background Colors
        // customBackgroundDarker: "#96B4B5",
        customBackgroundDark: "#D2DFE0",
        customBackgroundDefault: "#EBF1F1",
        customBackgroundLight: "#F6F9F9",
        // customBackgroundLighter: "#FFFFFF",

        // Secondary Colors
        // customSecondaryDarker: "#0A00BF",
        // customSecondaryDark: "#2B20FF",
        // customSecondaryDefault: "#8680FF",
        // customSecondaryLight: "#A49FFF",
        // customSecondaryLighter: "#C2BFFF",

        // Secondary Colors
        // customAccentDarker: "#352C40",
        // customAccentDark: "#6F5B85",
        // customAccentDefault: "#A99ABA",
        // customAccentLight: "#C6BCD1",
        // customAccentLighter: "#E5E1EA",
      },
    },
  },
  plugins: [],
};
export default config;
