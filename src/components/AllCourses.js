import React from "react"
import TagsList from "./TagsList"
import CoursesList from "./CoursesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulCourse(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        slug
        articles
        duration
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllCourses = () => {
  const data = useStaticQuery(query)
  const courses = data.allContentfulCourse.nodes

  return (
    <section className="courses-container">
      <TagsList courses={courses} />
      <CoursesList courses={courses} />
    </section>
  )
}

export default AllCourses
