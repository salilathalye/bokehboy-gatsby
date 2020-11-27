require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `bokehboy by Salil Athalye`,
        name: `bokehboy`,
        siteUrl: `https://bokehboy.com/`,
        description: `This is my description that will be used in the meta tags and important for search results`,
        hero: {
            heading: `Musings from the Journey to find Insight.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/bokehboy`,
            },
            {
                name: `github`,
                url: `https://github.com/salilathalye`,
            },
            {
                name: `instagram`,
                url: `https://instagram.com/bokehboy`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/company/narative/`,
            },
        ],
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: '@narative/gatsby-theme-novela',
            options: {
                sources: {
                    contentful: true,
                    local: false,
                },
            },
        },
    ]
};