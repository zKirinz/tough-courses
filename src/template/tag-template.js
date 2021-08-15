import React from "react"
import { graphql } from "gatsby"
import CoursesList from "../components/CoursesList"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const courses = data.allContentfulCourse.nodes

  return (
    <React.Fragment>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <CoursesList courses={courses} />
        </div>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  query GetCourseByTag($tag: String) {
    allContentfulCourse(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        slug
        duration
        articles
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
