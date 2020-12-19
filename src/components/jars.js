import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Jars = () => {
  
    const jars = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "jars"}}) {
      edges {
        node {
          id
          childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
  `)
  console.log("Jars",jars);
return (
  <div>
    {
          jars.imageSet.edges.map(image =>
            (
            <Img key={image.node.id} fixed={image.node.childImageSharp.fixed}/>
            )
          )
    }
  </div>
)
}

export default Jars;
