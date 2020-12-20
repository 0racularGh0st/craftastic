import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./category.scss";
const JarContainer = (props) => {
    return (
        <Paper
            className="category-paper-reverse"
            style={{
                backgroundColor: "white",
            }}
            elevation={10}
        >
           <div>
           <Img key={props.id} fluid={props.fluid} className="category-image-style"/>
           </div>
        </Paper>
    )
}
const Jars = () => {
  
    const jars = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "jars"}}) {
      edges {
        node {
          id
          childImageSharp {
            fixed(height:400) {
                ...GatsbyImageSharpFixed_withWebp
            }
            fluid(fit: INSIDE){
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `)
  //console.log("Jars",jars);
return (
  <div className="category-container-reverse">
          <div className="category-details">
            <h2>Jars</h2>
            <p style={{color:"#717171"}}>Need a place to organize your stationery or paint-brushes for all you artists out there? Our customized jars can add some flare to your workspace.</p>
          </div>
          <Carousel
                    className="category-carousel-style-reverse"
                    autoPlay={true}
                    animation={"fade"}
                    indicators={true}
                    interval={2500}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}

                >
                    {
                        jars.imageSet.edges.map((image, index) => {
                            return <JarContainer id={image.node.id} key={index} fixed={image.node.childImageSharp.fixed} fluid={image.node.childImageSharp.fluid} aspectRatio={image.node.childImageSharp.fluid.aspectRatio}/>
                        })
                    }
      </Carousel>
  </div>
)
}

export default Jars;
