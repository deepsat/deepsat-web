const url = "https://deepsat.pl";

export default {
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: url,
    site_name: "DeepSat",
    images: [
      {
        url: "http://deepsat.pl/og.png",
        width: 2048,
        height: 1170,
        alt: "DeepSat OG image",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  canonical: url,
  description: "A CanSat 2020/21 project",
  title: "DeepSat",
};
