import React from "react"
import Layout from "../components/layout"
const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. <a href="/">Click Here</a> to go back to home</p>
  </Layout>
)

export default NotFoundPage
