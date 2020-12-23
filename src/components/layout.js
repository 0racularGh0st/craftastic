/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import More from "./more"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./layout.scss"

const Layout = ({ children }) => {
  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
let header = document.querySelector(".header-menu-style");
let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 65) {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.classList.remove("hide");
      } else {
        header.classList.add("hide");
      }
      prevScrollpos = currentScrollPos;
    }
  });
  })
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="header-menu-style">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Menu/>
      </div>
      <div>
        <main>{children}</main>

        <More></More>
        <footer className="layout-footer">
          <p>
          Designed and Built
          </p>
          <p>by</p>
          <a href="https://nigeldavid.in" target="_blank" rel="noopener noreferrer" aria-label="nigel david">
          <div className="developed-by">
          <p>Nigel David Tariang</p>
          <ExitToAppIcon/>
          </div>
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
