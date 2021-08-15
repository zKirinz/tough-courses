import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CoursesList = ({ courses = [] }) => {
  return (
    <div className="courses-list">
      {courses.map(course => {
        const { id, title, slug, image, duration, articles } = course
        const pathToImage = getImage(image)

        return (
          <Link key={id} to={`/${slug}`} className="course">
            <GatsbyImage
              image={pathToImage}
              className="course-img"
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
