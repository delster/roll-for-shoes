module.exports = {
  siteMetadata: {
    title: `Roll for Shoes`,
    description: `This will be a web app, then a bot for various platforms, to assist with running Roll for Shoes.`,
    author: `David Elster | GitHub: @delster | Twitter: @delsterdev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `roll-for-shoes`,
        short_name: `r4s`,
        start_url: `/`,
        background_color: `#2c7a7b`,
        theme_color: `#2c7a7b`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
