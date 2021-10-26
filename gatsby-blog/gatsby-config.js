'use strict'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
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