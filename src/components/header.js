import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/zbooni-logo.png"


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
        className="px-20 flex-row justify-between"
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
        className="header-links-container p-2 justify-center space-x-2 font-bold">
              <a href="/"
                 className="p-4 header-link"
              >
                Features
              </a>
              <a href="/"
                 className="p-4 header-link"
              >
                Who We Serve
              </a>
              <a href="/"
                 className="p-4 header-link"
              >
                Pricing
              </a>
              <a href="/"
                 className="p-4 header-link"
              >
                FAQs
              </a>
              <a href="/"
                  className="p-4 header-link"
                >
                  Marketplace
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 ml-1 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
              </a>
               
              
              <button className="px-4 font-bold get-zbooni-button">
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
