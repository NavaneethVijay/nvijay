// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production')
  postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      },
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '##000810',
        icon_path: './src/favicon.png',
        name: 'NavaneethVijay',
        short_name: 'NavaneethVijay',
        theme_color: '#961029',
        lang: 'en',
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'NavaneethVijay',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: true,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'NavaneethVijay',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#666600',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
