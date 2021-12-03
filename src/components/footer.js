import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/zbooni-logo.png"
import uaeFlag from "../images/UAE.png"

class Footer extends React.Component{

    render(){
      return(
          <div className="footer flex-row p-16">
            <img src={logo} />
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-3 ">
                    <div className="footer-titles text-sm text-gray-400 p-12">
                        OUR LOCATION
                        <div className="locations">
                            <div className="flex-row">
                                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"/>
                                    <mask id="mask0_647_2229" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                                    <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"/>
                                    </mask>
                                    <g mask="url(#mask0_647_2229)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.66667H28V0H8V6.66667Z" fill="#12833B"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 20.0002H28V13.3335H8V20.0002Z" fill="#262626"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H8V0H0V20Z" fill="#FF323E"/>
                                    </g>
                                </svg>
                                UAE
                            </div>
                            <div>
                                KSA
                            </div>
                            <div>
                                Jordan
                            </div>
                            <div>
                                Egypt
                            </div>
                        </div>
                    </div>
                    <div className="footer-titles text-sm text-gray-400 p-12">
                        COMPANY
                    </div>
                    <div className="footer-titles text-sm text-gray-400 p-12">
                        EMAIL US
                    </div>
                </div>
            </div>
          </div>
      )
    }
  }
  
  Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Footer.defaultProps = {
    siteTitle: ``,
  }
  
  export default Footer
  