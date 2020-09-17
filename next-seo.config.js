const url = "https://deepsat.pl";

export default {
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: url,
    site_name: "DeepSat",
    images: [
      {
        url:
          "https://og-image.vercel.app/**DeepSat**.png?theme=dark&md=1&fontSize=225px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=50&heights=50",
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
