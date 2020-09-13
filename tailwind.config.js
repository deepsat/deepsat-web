module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#420cbd",
          light: "#7d42f1",
          dark: "#00008b",
          text: "#ffffff",
        },
      },
      fontFamily: {
        sans: "Open Sans",
      },
      inset: {
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
};
