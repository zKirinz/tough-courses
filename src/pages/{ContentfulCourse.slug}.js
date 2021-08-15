import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AiOutlineFieldTime } from "react-icons/ai"
import { RiArticleLine } from "react-icons/ri"
import { GrResources } from "react-icons/gr"
import { TiTickOutline } from "react-icons/ti"
import SEO from "../components/SEO"

const CourseTemplate = ({ data }) => {
  const {
    title,
    duration,
    articles,
    resources,
    content,
    description: { description },
    image,
  } = data.contentfulCourse
  const pathToImage = getImage(image)
  const { tags, what_you_will_learn, requirements, link } = content

  const links = () => {
    const linksList = []
    for (const type in link) {
      if (type === "google_drive") {
        linksList.push(
          <a key={type} href={link[type]} target="_blank" rel="noreferrer">
            <p className="single-tool">Google Drive</p>
          </a>
        )
      } else if (type === "udemy") {
        linksList.push(
          <a key={type} href={link[type]} target="_blank" rel="noreferrer">
            <p className="single-tool">Udemy</p>
          </a>
        )
      }
    }
    return linksList
  }

  return (
    <React.Fragment>
      <SEO title={title} />
      <main className="page">
        <div className="course-page">
          <section className="course-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="course-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="course-icons">
                <article>
                  <AiOutlineFieldTime />
                  <h5>duration</h5>
                  <p>{duration} hours.</p>
                </article>
                <article>
                  <RiArticleLine />
                  <h5>articles</h5>
                  <p>{articles}</p>
                </article>
                <article>
                  <GrResources />
                  <h5>resources</h5>
                  <p>{resources}</p>
                </article>
              </div>
              <p className="course-tags">
                Tags:
                {tags.map((tag, index) => {
                  return (
                    <Link key={index} to={`/${tag}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="course-content">
            <article>
              <h4>What you'll learn</h4>
              {what_you_will_learn.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>
                        <TiTickOutline />
                      </p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article>
              <div>
                <h4>requirements</h4>
                {requirements.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>link</h4>
                {links()}
              </div>
            </article>
          </section>
        </div>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  query getSingleCourse($slug: String) {
    contentfulCourse(slug: { eq: $slug }) {
      title
      slug
      duration
      articles
      resources
      content {
        link {
          google_drive
          udemy
        }
        tags
        requirements
        what_you_will_learn
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default CourseTemplate
