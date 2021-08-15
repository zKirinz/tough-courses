import React from "react"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <React.Fragment>
      <SEO title="Not Found" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Error
