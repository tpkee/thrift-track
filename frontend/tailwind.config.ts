import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "/assets/icons/**/*.svg"],
  theme: {
    extend: {
      fontSize: {
        xxs: [
          "0.65rem",
          {
            lineHeight: "1rem",
          },
        ],
      },
      boxShadow: ({ theme }: any) => ({
        "custom-primary": `inset 2px 2px rgba(0, 0, 0, 1), inset -2px -2px rgba(0, 0, 0, 1), 3px 3px rgba(0, 0, 0, 1)`,
        "custom-secondary": `inset 2px 2px rgba(0, 0, 0, 1), inset -2px -2px rgba(0, 0, 0, 1), 0px 0px rgba(0, 0, 0, 1)`,
      }),
      colors: {
        transparent: "transparent",
        current: "currentColor",
        hedonist: {
          100: "#FFE9EE",
          200: "#FFD3DD",
          300: "#FFA7BB",
          400: "#FF7A99",
          500: "#FF4E77",
          600: "#FF2255",
          700: "#CC1B44",
          800: "#990F2F",
          900: "#660E22",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
