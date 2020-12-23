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
           <Img key={props.id} fixed={props.fixed} className="category-image-style" loading="eager" objectFit="contain" fadeIn={false}/>
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
            fixed(height:400){
              ...GatsbyImageSharpFixed_withWebp
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
                    interval={3300}
                    navButtonsAlwaysVisible={true}
                    navButtonsAlwaysInvisible={false}

                >
                    {
                        festive.imageSet.edges.map((image, index) => {
                            return <FestiveContainer id={image.node.id} key={index}  fixed={image.node.childImageSharp.fixed} />
                        })
                    }
      </Carousel>
          </div>
  </div>
)
}

export default Festive;
