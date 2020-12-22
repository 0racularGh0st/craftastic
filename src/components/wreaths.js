import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import "./category.scss";
const WreathsContainer = (props) => {
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
const Wreaths = () => {
  
    const wreaths = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "wreaths"}}) {
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
  <div className="category-container-reverse">
          <div className="category-details">
            <h2>Wreaths</h2>
            <p style={{color:"#717171"}}>We also make wreaths that can uplift your front door or wherever you chose to hang them.</p>
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
                        wreaths.imageSet.edges.map((image, index) => {
                            return <WreathsContainer id={image.node.id} key={index} fluid={image.node.childImageSharp.fluid} />
                        })
                    }
      </Carousel>
  </div>
)
}

export default Wreaths;