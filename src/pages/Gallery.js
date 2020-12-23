import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./gallery.scss";
const Gallery = () => {
  const bottles = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "gallery_bottles"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: INSIDE,maxWidth:600){
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `)


    return (
        <Layout>
        <SEO title="Page two" />
        <div className="gallery-main-container">
            <h1 style={{textAlign:"center"}}>Gallery</h1>
            <h4 style={{textAlign:"center"}}>Here are some of the things we've made so far.</h4>
            <div className="gallery-images">
                   {
                        bottles.imageSet.edges.map((image, index) => {
                           return <Img key={index} fluid={image.node.childImageSharp.fluid} className="gallery_image" alt="gallery-image" aria-label="gallery-image"/>
                        })
                    }
            </div>
        </div>
      </Layout>
            
    
    )
}

export default Gallery;