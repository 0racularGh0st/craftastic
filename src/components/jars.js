import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./jars.scss";
const JarContainer = (props) => {
    return (
        <Paper
            className="jar-paper"
            style={{
                backgroundColor: "white",
            }}
            elevation={10}
        >
           <div>
           <Img key={props.id} fluid={props.fluid} className="jar-image-style"/>
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
  console.log("Jars",jars);
return (
  <div className="category-container">
          <div className="category-details">
            <h2>Bottles</h2>
            <p style={{color:"#717171"}}>We take used bottles and turn them into showpieces that are worthy for a place on your living-room shelf.</p>
          </div>
          <Carousel
                    className="jar-carousel-style"
                    autoPlay={false}
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
    {/* {
          jars.imageSet.edges.map(image =>
            (
            <Img key={image.node.id} fixed={image.node.childImageSharp.fixed}/>
            )
          )
    } */}
  </div>
)
}

export default Jars;
