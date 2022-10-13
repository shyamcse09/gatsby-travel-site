import React from "react"
import Layout from "../components/layout"
import Seo from "../components/metadata"

export default function About() {
  const styles = {
    height: '500px'
  }
  return (
    <div>
      <Seo title="About Page" />
      <Layout>
        <div style={styles}>Coming Soon......</div>
      </Layout>

    </div>
  )
}
