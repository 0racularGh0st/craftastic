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
      const parallax = document.querySelector('.background-main-style');
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY("+ scrollPosition*0.5 + "px)";
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
    <h1 style={{height:"150vh",marginTop:"50vh"}}>Welcome to Craftastic!</h1>
    <div>
    </div>
  </Layout>
)
}
export default IndexPage
