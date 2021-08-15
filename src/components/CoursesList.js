import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CoursesList = ({ courses = [] }) => {
  return (
    <div className="recipes-list">
      {courses.map(course => {
        const { id, title, slug, image, duration, articles } = course
        const pathToImage = getImage(image)

        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Duration: {duration} hours | Articles: {articles}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default CoursesList
