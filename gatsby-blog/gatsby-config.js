'use strict'

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'Gatsby blog with Strapi',
    author: {
      name: 'Muhammad Ahmad',
      url: 'https://mahmad.netlify.app/'
    }
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        // apiURL: process.env.API_URL || 'http://localhost:1337',
        apiURL: process.env.API_URL,
        collectionTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'category'
        ],
        queryLimit: 1000
      }
    },
  ]
}