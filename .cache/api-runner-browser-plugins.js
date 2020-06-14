module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"quality":100,"linkImagesToOriginal":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#fff","theme_color":"#1CD5BD","display":"minimal-ui"},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["PT Serif"]},"custom":{"families":["Inter"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
