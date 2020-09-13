import Head from "next/head";
import Header from "./header";

const siteTitle = "DeepSat";
const siteDescription = "Lorem ipsum";

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
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header links={links} />
      <div className="container mx-auto px-8 md:px-16 mt-24">{children}</div>
    </>
  );
}
