module.exports = {
  siteMetadata: {
    siteUrl: "https://deepsat.github.io",
    title: "DeepSat",
    description: "A CanSat 2020/21 project",
    image: "/og.png"
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ppCXN3eTtnc0rl2r06F8t6E79Pem7augFHJSjXHocxo",
        spaceId: "er9p4vkgx7gu",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
