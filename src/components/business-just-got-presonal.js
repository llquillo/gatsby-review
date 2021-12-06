import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/zbooni-logo.png"

class BusinessJustGotPersonal extends React.Component{
    render(){
        return(
            <div className="px-40 business-page">
                <h1 className="pr-10 pt-32 business-page-title">
                    Business just got personal.
                </h1>
                <p className="px-30 pr-12 py-4 business-page-text">
                    Sell like never before. Bring checkout to the channels that matter the most.
                </p>
                <button className="m-2 business-page-button">
                    Let's Start
                </button>
                <div>
                <svg width="387" height="330" viewBox="0 0 387 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.0109 0.0544634H352.18C358.835 0.0531612 365.349 2.03716 370.943 5.76896C376.538 9.50075 380.977 14.8224 383.728 21.0977C386.479 27.373 387.427 34.3362 386.458 41.1546C385.489 47.9731 382.644 54.3582 378.263 59.5462L340.24 104.656C301.5 150.668 262.298 197.634 223.712 244.177L171.648 306.853C161.537 319.326 147.25 327.383 131.647 329.41C116.044 331.437 100.278 327.285 87.5053 317.785C80.8302 312.596 75.2559 306.042 71.1278 298.53C66.9997 291.017 64.406 282.707 63.5075 274.113C62.609 265.52 63.4249 256.826 65.9046 248.573C68.3843 240.319 72.4749 232.682 77.9227 226.133C95.4822 204.905 113.247 183.5 131.216 161.918L160.784 126.308H60.961C52.6135 126.306 44.3555 124.528 36.6983 121.086C29.0412 117.643 22.1483 112.61 16.446 106.296C10.7437 99.9826 6.35351 92.5239 3.54777 84.382C0.742033 76.24 -0.419622 67.5882 0.134536 58.9623C1.50401 42.7387 8.74554 27.6514 20.4069 16.726C32.0682 5.80066 47.2871 -0.154731 63.0109 0.0544634Z" fill="white"/>
                </svg>
                </div>
            </div>
        )
    }
}

export default BusinessJustGotPersonal