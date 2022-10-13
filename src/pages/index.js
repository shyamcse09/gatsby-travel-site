import React from "react"
import Layout from "../components/layout"
import SliderImageCarousel from "../components/imageCarousel"
import Seo from "../components/metadata"

export default function Home() {
  return (
    <div>
      <Seo title="Home Page" />
      <Layout>
        <div className="home-carousel max-w-screen-xl mx-auto">
          <SliderImageCarousel />
        </div>
      </Layout>

    </div>
  )
}
