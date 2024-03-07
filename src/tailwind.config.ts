import type { Config } from "tailwindcss";

// import theme from "@/util/theme";
import theme from "../theme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1fr-2fr": "1fr 2fr",
      },
      gridTemplateRows: {
        "1fr-2fr": "1fr 2fr",
      },
      borderWidth: {
        "1": "1px",
      },
      colors: {
        primaryDefault: "#6C8282",
        backgroundDark: "#D2DFE0",
        backgroundDarker: "#96B4B5",
        backgroundDefault: "#EBF1F1",

        primary: {
          main: theme.palette.primary.main,
          contrastText: theme.palette.primary.contrastText,
        },
        secondary: {
          main: theme.palette.secondary.main,
          contrastText: theme.palette.secondary.contrastText,
        },
        common: {
          black: theme.palette.common.black,
          white: theme.palette.common.white,
        },
        error: {
          main: theme.palette.error.main,
          light: theme.palette.error.light,
          dark: theme.palette.error.dark,
          contrastText: theme.palette.error.contrastText,
        },
        warning: {
          main: theme.palette.warning.main,
          light: theme.palette.warning.light,
          dark: theme.palette.warning.dark,
          contrastText: theme.palette.warning.contrastText,
        },
        info: {
          main: theme.palette.info.main,
          light: theme.palette.info.light,
          dark: theme.palette.info.dark,
          contrastText: theme.palette.info.contrastText,
        },
        success: {
          main: theme.palette.success.main,
          light: theme.palette.success.light,
          dark: theme.palette.success.dark,
          contrastText: theme.palette.success.contrastText,
        },
        grey: {
          50: theme.palette.grey[50],
          100: theme.palette.grey[100],
          200: theme.palette.grey[200],
          300: theme.palette.grey[300],
          400: theme.palette.grey[400],
          500: theme.palette.grey[500],
          600: theme.palette.grey[600],
          700: theme.palette.grey[700],
          800: theme.palette.grey[800],
          900: theme.palette.grey[900],
          A100: theme.palette.grey.A100,
          A200: theme.palette.grey.A200,
          A400: theme.palette.grey.A400,
          A700: theme.palette.grey.A700,
        },
        text: {
          primary: theme.palette.text.primary,
          secondary: theme.palette.text.secondary,
          disabled: theme.palette.text.disabled,
        },
        divider: theme.palette.divider,
        background: {
          paper: theme.palette.background.paper,
          default: theme.palette.background.default,
        },
      },
    },
  },
  plugins: [],
};
export default config;
