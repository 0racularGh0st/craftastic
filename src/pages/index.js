import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "background-main.jpg" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
return (
  <Layout>
    <SEO title="Home" />
    <Img fluid={data.placeholderImage.childImageSharp.fluid} fadeIn durationFadeIn={1000}/>
    <h1>Welcome to Craftastic!</h1>
    <div>
    </div>
  </Layout>
)
}
export default IndexPage
