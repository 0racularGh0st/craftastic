import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Rellax from 'rellax';
import "./main.scss";
const IndexPage = () => {
//   useEffect(()=>{
//     window.addEventListener('scroll', ()=>{
//       const parallax = document.querySelector('.background-main-style');
//       let scrollPosition = window.pageYOffset;
//         parallax.style.transform = "translateY("+ scrollPosition*0.3 + "px)";
//   });
// })
  useEffect(()=> {
    window.scrollTo(0,0);
    const rellax = new Rellax(".background-main-style",{
      speed: -4,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
    });
    return() => {
      console.log("cleanup");
      rellax.destroy();
    }
  })
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
    className="rellax background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    fadeIn 
    durationFadeIn={1000}
    className="rellax background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} 
    fadeIn 
    durationFadeIn={1000}
    className="rellax background-main-style"
    />
    <div className="home-text-style">
      <h1>Welcome to Craftastic!</h1>
    </div>
  </Layout>
)
}

export default IndexPage
