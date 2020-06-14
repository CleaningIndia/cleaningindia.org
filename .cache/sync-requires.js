const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/templates/tag.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/privacy.js"))),
  "component---src-pages-terms-js": hot(preferDefault(require("/Users/PJ/Documents/Workspace/cleaningIndia/cleaningindia.org/src/pages/terms.js")))
}

