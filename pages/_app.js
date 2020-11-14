import "../styles/index.css";
import "fontsource-montserrat";
import "fontsource-montserrat/500.css";
import "fontsource-montserrat/600.css";
import "fontsource-montserrat/700.css";
import "fontsource-open-sans";
import "fontsource-open-sans/700.css";
import config from "react-reveal/globals";

config({ ssrFadeout: true })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
