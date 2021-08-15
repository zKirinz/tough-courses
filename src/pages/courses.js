import React from "react"
import AllCourses from "../components/AllCourses"
import SEO from "../components/SEO"

const Courses = () => {
  return (
    <React.Fragment>
      <SEO title="Courses" />
      <main className="page">
        <AllCourses />
      </main>
    </React.Fragment>
  )
}

export default Courses
