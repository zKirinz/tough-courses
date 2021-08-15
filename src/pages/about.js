import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import CoursesList from "../components/CoursesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulCourse: { nodes: courses },
  },
}) => {
  return (
    <React.Fragment>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>The Udemy courses list that I have learnt</h2>
            <p>
              This website contains all of my Udemy learnt course as well as the
              link of my Google Drive that contains these courses.
            </p>
            <p>
              Feel free to use my courses resources to enhance your skills. But
              don't forget to star this project on my GitHub!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.png"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-courses">
          <h5>Look at this Awsomesouce!</h5>
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

export default About
