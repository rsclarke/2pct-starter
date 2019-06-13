const cssimport = require('postcss-import')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = ({ env }) => ({
  plugins: [
    cssimport,
    tailwind,
    env === 'production' ? purgecss : false,
    env === 'production' ? cssnano : false
  ]
})

