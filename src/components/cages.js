import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./category.scss";
const CagesContainer = (props) => {
    return (
        <Paper
            className="category-paper"
            style={{
                backgroundColor: "white",
            }}
            elevation={10}
        >
           <div>
           <Img key={props.id} fluid={props.fluid} className="category-image-style" loading="eager"/>
           </div>
        </Paper>
    )
}
const Cages = () => {
  
    const cages = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "cages"}}) {
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
            <h2>Cages</h2>
            <p style={{color:"#717171"}}>We make these cages with candles inside them to light up your night.</p>
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
                        cages.imageSet.edges.map((image, index) => {
                            return <CagesContainer id={image.node.id} key={index}  fluid={image.node.childImageSharp.fluid} />
                        })
                    }
      </Carousel>
  </div>
)
}

export default Cages;
