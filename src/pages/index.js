import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bottles from "../components/bottles"
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
    let heading1= document.querySelector(".home-main-heading");
    let subHeading1= document.querySelector(".home-sub-heading");
    window.addEventListener('scroll', ()=>{
      let scrollPosition = window.pageYOffset;
      heading1.style.transform = "translateX("+ scrollPosition*0.3 + "px)";
      subHeading1.style.transform = "translateX(-"+ scrollPosition*0.4 + "px)";
    })
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
    <div className="home-content-container-one">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} 
        fadeIn 
        durationFadeIn={1000}
        className="rellax background-main-style"
        />
        <div className="home-text-style">
        <h1 className="home-main-heading">Welcome to Craftastic! </h1>
        <h2 className="home-sub-heading" style={{filter:"brightness(0.7)"}}>We turn junk into beauty.</h2>
        </div>
    </div>
    <div className="home-content-container-two">
      <h1 style={{paddingTop:"1.45rem",marginBottom:"5rem",textAlign:"center"}}>
        Things We Re-Make </h1>
        <Bottles></Bottles>
    </div>
    <div style={{height: "var(--height)",background:"white"}}>

    </div>
  </Layout>
)
}

export default IndexPage
