import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      markdownRemark(frontmatter: {title: {eq: "Navigation"}}) {
        html
      }
    }
  `)
  console.log(data);
  return (
    <div className="bg-blue-dark header ">
        <div className="m-0 p-0 list-none container mx-auto" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}

export default Header


