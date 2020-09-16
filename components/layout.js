import Head from "next/head";
import Header from "./header";

const siteTitle = "DeepSat";
const siteDescription = "Lorem ipsum";

const background = require("../images/background_horizontal.jpg?resize");
const backgroundVertical = require("../images/background_vertical.jpg?resize");

const links = [
  { href: "/#news", label: "Aktualności" },
  { href: "/#about", label: "O nas" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/**DeepSat**.jpeg?theme=light&md=1&fontSize=225px`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <img
        src={background.src}
        srcSet={background.srcSet}
        className="bgimage"
        aria-hidden="true"
        alt=""
      />
      <img
        src={backgroundVertical.src}
        srcSet={backgroundVertical.srcSet}
        className="bgimage vertical"
        aria-hidden="true"
        alt=""
      />
      <Header links={links} />
      <div className="container mx-auto px-8 md:px-16 mt-24">{children}</div>
    </>
  );
}
