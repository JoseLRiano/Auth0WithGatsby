// Implement the Gatsby API "onCreatePage". This is 
// called after every page is created.

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client 
    if(page.path.match(/^\/profile/)) {
        page.matchPath = "/profile/*"

        // Update the page.
        createPage(Page)
    }
}

// This code ignores auth0-js during the server-side build since it relies on browser APIs like `window`

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if(stage === "build-html"){
        /*
        * During the build step, `auth0-js` will break because it relies on 
        * Browser-specific APIs. Fortunately , we don't need it during the build.
        * Using Webpack's null loades, we're able to effectivelu ignore `auth0-js`
        * during the build. (See `src/utils/auth.js` to see how we prevent this 
        * from breaking the app.)
        */
       actions.setWebpackConfig({
           module: {
               rules: [
                   {
                       test: /auth0-js/,
                       use: loaders.null(),
                   },
               ],
           },
       })
    }
}