import React from "react"
import { Link, graphql } from "gatsby"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulCourse.nodes)

  return (
    <React.Fragment>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag

            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} course</p>
              </Link>
            )
          })}
        </section>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    allContentfulCourse {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
