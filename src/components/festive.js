import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./category.scss";
const FestiveContainer = (props) => {
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
const Festive = () => {
  
    const festive = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "festive"}}) {
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
            <h2>Festive Decorations</h2>
            <p style={{color:"#717171"}}>We make festive themed decorations as well. Do check out these Christmas themed decorations.</p>
          </div>
          
          <div style={{perspective:"600px"}}>
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
                        festive.imageSet.edges.map((image, index) => {
                            return <FestiveContainer id={image.node.id} key={index}  fluid={image.node.childImageSharp.fluid} />
                        })
                    }
      </Carousel>
          </div>
  </div>
)
}

export default Festive;
