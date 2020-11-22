import "fontsource-montserrat";
import "fontsource-montserrat/500.css";
import "fontsource-montserrat/600.css";
import "fontsource-montserrat/700.css";
import "fontsource-open-sans";
import "fontsource-open-sans/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
