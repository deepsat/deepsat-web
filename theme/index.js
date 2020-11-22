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
      html: {
        scrollBehavior: "smooth",
        scrollPaddingTop: "24rem",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        transition: "color ease-in-out 200ms",
        "&:hover, &:focus": {
          color: "brand.accent",
          textDecoration: "none",
        },
      },
    },
    CTA: {
      parts: ["button", "icon"],
      baseStyle: {
        button: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          borderRadius: "full",
          py: 2,
          px: 4,
          transition: "filter ease-in-out 200ms",
          bgColor: "brand.primary",
          color: "white",
          "&:hover, &:focus": {
            filter: "brightness(0.8)",
          },
        },
        icon: {
          mr: "0.5rem",
          fontSize: "2.25rem",
        },
      },
    },
    Button: {
      variants: {
        custom: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          borderRadius: "full",
          py: "0.5rem",
          px: "1rem",
          transition: "filter ease-in-out 200ms",
          bgColor: "brand.primary",
          color: "#fff",
          height: "auto",
          "&:hover, &:focus": {
            filter: "brightness(0.8)",
          },
          "& svg": {
            mr: "0.25rem",
            fontSize: "2.25rem",
          },
        },
      },
    },
    Section: {
      baseStyle: {
        marginTop: 32,
        px: { base: 8, md: 16 },
        py: 16,
        bg: "white",
        boxShadow: "lg",
        borderRadius: "sm",
      },
    },
  },
});

export default theme;
