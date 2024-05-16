import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        customBackgroundDarker: "#96B4B5",
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

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
