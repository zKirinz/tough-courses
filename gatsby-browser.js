const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
