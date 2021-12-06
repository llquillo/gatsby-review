/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import BusinessPage from "./business-just-got-presonal"
import "./layout.css"
import "tailwindcss/tailwind.css"

import bgImage from "../images/background-image-homepage.png"
import footerImage from "../images/footer-image.png"

const Layout = ({ children }) => {
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
      <div style={{ backgroundImage: `url(${bgImage})`, height: `780px`, width: `100%` }}>
      <Header />
        {children}
        <div className="pl-16 pt-36">
          <img src={footerImage}/>
        </div>
      </div>
      <BusinessPage/>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
