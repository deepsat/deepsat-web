const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [320, 640, 960, 1200, 1800, 2400],
          placeholder: true,
          placeholderSize: 20,
        },
        optimizeImagesInDev: true,
      },
    ],
  ],
  {
    i18n: {
      locales: ["en", "pl"],
      defaultLocale: "pl",
    },
    future: {
      webpack5: true,
    },
  }
);
