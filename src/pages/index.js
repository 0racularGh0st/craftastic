import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./main.scss";
const IndexPage = () => {
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const parallax = document.querySelectorAll('.background-main-style');
      let scrollPosition = window.pageYOffset;
      parallax.forEach(prlx => {
        prlx.style.transform = "translateY("+ scrollPosition*0.6 + "px)";
      })
    })
  });
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
    <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    fadeIn 
    durationFadeIn={1000}
    className="background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    fadeIn 
    durationFadeIn={1000}
    className="background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    fadeIn 
    durationFadeIn={1000}
    className="background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>


    <div>
    </div>
  </Layout>
)
}
export default IndexPage
