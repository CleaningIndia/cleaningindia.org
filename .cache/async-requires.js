// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-tag-js": () => import("./../src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-privacy-js": () => import("./../src/pages/privacy.js" /* webpackChunkName: "component---src-pages-privacy-js" */),
  "component---src-pages-terms-js": () => import("./../src/pages/terms.js" /* webpackChunkName: "component---src-pages-terms-js" */)
}
