const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetCourses {
      allContentfulCourse {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulCourse.nodes.forEach(course => {
    course.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/template/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
