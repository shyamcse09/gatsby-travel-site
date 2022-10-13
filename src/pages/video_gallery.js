import React from "react"
import Layout from "../components/layout"
import Seo from "../components/metadata"

export default function Video() {
  const styles = {
    height: '500px'
  }
  return (
    <div>
      <Seo title="Video Page" />
      <Layout>
        <div style={styles}>Coming Soon......</div>
      </Layout>

    </div>
  )
}
