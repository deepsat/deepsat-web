const url = "https://deepsat.pl";

export default {
  openGraph: {
    type: "website",
    locale: "pl",
    url: url,
    site_name: "DeepSat",
    images: [
      {
        url: "http://deepsat.pl/og.png",
        width: 1200,
        height: 630,
        alt: "DeepSat OG image",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  canonical: url,
  description: "A CanSat 2020/21 project",
  title: "DeepSat",
};
