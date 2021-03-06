import React, {useEffect} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bottles from "../components/bottles"
import Jars from "../components/jars"
import Cages from "../components/cages"
import Wreaths from "../components/wreaths"
import Festive from "../components/festive"
import Rellax from 'rellax';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
        loading="eager"
        />
        <div className="home-text-style">
        <h1 className="home-main-heading">Welcome to Craftastic! </h1>
        <h2 className="home-sub-heading" style={{filter:"brightness(0.7)"}}>We turn junk into beauty.</h2>
        </div>
    </div>
    <div className="home-content-container-two">
      <h1 style={{paddingTop:"1.45rem",marginBottom:"5rem",textAlign:"center"}}>
        Things We Make </h1>
        <Bottles></Bottles>
        <Jars></Jars>
        <Cages></Cages>
        <Wreaths></Wreaths>
        <Festive></Festive>

        <h3 style={{
                textAlign: "center",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
            }}>Want to see more items? </h3>
            <h4 style={{textAlign:"center",color:"rgb(113, 113, 113)",marginBottom:"0"}}>Check out the 
                <div style={{display:"inline-block"}}>
                <Link to="/Gallery">
                <h4 className="more-link">Gallery <ExitToAppIcon className="more-link-icon"/></h4>
                 </Link>
               </div>
            </h4>

    </div>
  </Layout>
)
}

export default IndexPage
