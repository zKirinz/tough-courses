import React from "react"
import { graphql } from "gatsby"
import CoursesList from "../components/CoursesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const courses = data.allContentfulCourse.nodes

  return (
    <React.Fragment>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Fill the form with your information and messages to notify me.
              Make sure the information and messages make sense because I have a
              black list!
            </p>
            <p>
              You can learn more about me in{" "}
              <a href="https://github.com/kien123456k" target="_blank">
                my profile
              </a>
              .
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mknkpoja"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
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

export default Contact
