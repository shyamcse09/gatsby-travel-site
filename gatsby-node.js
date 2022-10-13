const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/destinations.js')

  const result = await graphql(`
    query{
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "location"}}}) {
        nodes {
          id
          frontmatter {
            path
            type
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const pages = result.data.allMarkdownRemark.nodes
  if(pages.length > 0) {
    pages.forEach((element) => {
      const urlPath = element.frontmatter.path
      createPage({
        path: urlPath,
        component: postTemplate,
        context: { id: element.id },
      })
    });
  }
}
