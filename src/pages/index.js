import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import TagsList from "../components/TagsList"
import CoursesList from "../components/CoursesList"
import SEO from "../components/SEO"

const Home = ({ data }) => {
  const courses = data.allContentfulCourse.nodes

  return (
    <React.Fragment>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.png"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>tough courses</h1>
              <h4>work until your idols become your rivals</h4>
            </div>
          </div>
        </header>
        <section className="courses-container">
          <TagsList courses={courses} />
          <CoursesList courses={courses} />
        </section>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    allContentfulCourse(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        slug
        duration
        articles
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Home
