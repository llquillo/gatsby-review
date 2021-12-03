import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/zbooni-logo.png"
import { StaticImage } from "gatsby-plugin-image"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `transparent`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `black`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

class Header extends React.Component{
  // state = {
  //   isMobileMenu = false
  // }

  render(){
    // const { isMobileMenu } = this.state
    return(
        <header
        className="flex-row justify-items-center"
        style={{
          display: `flex`,
          flexDirection: `row`,
          height: `90px`,
          background: `transparent`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          className="flex-row justify-center align-center zbooni-logo"
        >
            <Link
              to="/"
            >
             <img
                src = {logo}
                alt="Zbooni logo"
              />
            </Link>
            
        </div>
        <div 
        className="header-links-container p-2 justify-center space-x-2 > *">
              <a href="/"
                 className="header-link"
              >
                Features
              </a>
              <a href="/"
                 className="header-link"
              >
                Who We Serve
              </a>
              <a href="/"
                 className="header-link"
              >
                Pricing
              </a>
              <a href="/"
                 className="header-link"
              >
                FAQs
              </a>
              <a href="/"
                 className="header-link"
              >
                Marketplace
              </a>
              <button className="get-zbooni-button">
                Get Zbooni
              </button>
            </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
