import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.scss";
const About = () => {
    return (
        <Layout>
        <SEO title="Page two" />
        <div className="about-main-container">
          <h1>About Us</h1>
          <h4 className="about-content">
              Hello, we are a small-business operating out of Shillong, India.
              We love turning Junk into Beauty, be it old bottles, jars or anything that can be recycled. 
          </h4>
        </div>
      </Layout>
            
    
    )
}

export default About;