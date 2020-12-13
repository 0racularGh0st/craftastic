import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'
const About = () => {
    return (
        <Layout>
        <SEO title="Page two" />
        <h1>Hi from About Page</h1>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
            
    
    )
}

export default About;