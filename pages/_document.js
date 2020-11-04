import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/favicon/apple-touch-icon.png?v=1"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon/favicon-32x32.png?v=1"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon/favicon-16x16.png?v=1"
            />
            <link rel="manifest" href="/favicon/site.webmanifest?v=1" />
            <link
              rel="mask-icon"
              href="/favicon/safari-pinned-tab.svg?v=1"
              color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta
              name="msapplication-config"
              content="/favicon/browserconfig.xml?v=1"
            />
            <meta name="theme-color" content="#000000" />
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
