const React = require("react")
const Layout = require("./src/components/Layout").default

exports.wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
