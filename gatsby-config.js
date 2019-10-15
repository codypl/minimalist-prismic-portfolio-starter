require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Minimalist Portfolio Starter for Gastby with Prismic CMS.`,
    author: `Cody `,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
       {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `EB+Garamond`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1d1d1b`,
        theme_color: `#1d1d1b`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
      `gatsby-plugin-sass`,
  ],
}
