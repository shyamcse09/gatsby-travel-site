import React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/metadata"

const PageTemplate = (data) => {
  const pageData = data.data.markdownRemark;
  const image = getImage(pageData.frontmatter.carouselImage.childImageSharp.gatsbyImageData)
  return (
    <div>
      <Seo title= {pageData.frontmatter.title} description={pageData.frontmatter.shortDescript}/>
      <Layout>
        <GatsbyImage 
          image={ image }
          alt={ pageData.frontmatter.title } 
          loading="lazy"
          objectFit="cover"
        />
        <h1> {pageData.frontmatter.title}</h1>
        <div className="container" dangerouslySetInnerHTML={{ __html: pageData.html }}></div>
      </Layout>
    </div>
  )
}
export default PageTemplate;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        shortDescript
        title
        path
        carouselImage {
          childImageSharp {
            gatsbyImageData (
              height: 300
              width: 1400
            )
          }
        }
      }
      html
    }
  }
`;
