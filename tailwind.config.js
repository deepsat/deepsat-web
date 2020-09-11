module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#420cbd",
          light: "#7d42f1",
          dark: "#00008b",
        },
      },
      textColor: {
        base: "#000000",
        primary: {
          default: "#ffffff",
          background: {
            default: "#420cbd",
            light: "#7d42f1",
            dark: "#00008b",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
