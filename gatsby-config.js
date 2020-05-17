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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}
