import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
    heading: "Montserrat",
  },
  colors: {
    brand: {
      default: "#420cbd",
      primary: "#420cbd",
      accent: "#7d42f1",
    },
  },
  styles: {
    global: {
      body: {
        background: "black",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: "color ease-in-out 200ms",
        _hover: {
          color: "brand.accent",
          textDecoration: "none",
        },
        _focus: {
          color: "brand.accent",
        },
      },
    },
  },
});

export default theme;
