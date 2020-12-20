import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./category.scss";
const BottlesContainer = (props) => {
    return (
        <Paper
            className="category-paper"
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
const Bottles = () => {
  
    const bottles = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "bottles"}}) {
      edges {
        node {
          id
          childImageSharp {
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
  <div className="category-container">
          <div className="category-details">
            <h2>Bottles</h2>
            <p style={{color:"#717171"}}>We take used bottles and turn them into showpieces that are worthy for a place on your living-room shelf.</p>
          </div>
          <Carousel
                    className="category-carousel-style"
                    autoPlay={true}
                    animation={"fade"}
                    indicators={true}
                    interval={2500}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}

                >
                    {
                        bottles.imageSet.edges.map((image, index) => {
                            return <BottlesContainer id={image.node.id} key={index}  fluid={image.node.childImageSharp.fluid} />
                        })
                    }
      </Carousel>
  </div>
)
}

export default Bottles;
