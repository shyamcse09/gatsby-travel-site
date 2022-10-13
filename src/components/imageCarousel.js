import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "location"}}}
        sort: {fields: frontmatter___title, order: ASC}
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              shortDescript
              carouselImage {
                childImageSharp {
                  gatsbyImageData (
                    width: 1200
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    pauseOnHover: true,
    autoplay:true,
    adaptiveHeight:true
  }
  const imageList = data.allMarkdownRemark.edges
  return (
    <Slider {...settings}>
      {imageList.map(({ node }) => {
        const title = node.frontmatter.title
        const image = getImage(node.frontmatter.carouselImage.childImageSharp.gatsbyImageData)
        const shordDesc = node.frontmatter.shortDescript
        const path = node.frontmatter.path
        return (
          <div key={ title } className='image-wrapper relative'>
            <GatsbyImage 
              image={ image }
              alt={ title } 
              loading="lazy"
              objectFit="cover"
            />
            <div className="description absolute top-2/4 right-5 bg-white bg-opacity-70 w-3/6 p-5">
              <h2>{ title }</h2>
              <p>{ shordDesc }</p>
              <p>
                <Link 
                  to={ path } 
                  title={ title } 
                  className="p-4 bg-green-700 text-white inline-block no-underline hover:bg-green-500 hover:font-bold">
                  Learn More
                </Link>
              </p>    
            </div>
          </div>
        )
      })}
    </Slider>
  )
}


export default ImageCarousel