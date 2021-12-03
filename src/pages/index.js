import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import bgImage from "../images/background-image-homepage.png"
<style>
  .main{

  }    
</style>
class Index extends React.Component{
  render(){
    return(
      <Layout>
        <Seo title="Zbooni" />
        <div className="homepage-text-container">
          <h1 className="homepage-title">Say Hello</h1>
          <h1 className="homepage-title">to cCommerce. </h1>
          <p className="homepage-text"> 
            The next generation platform for modern business. Drive more
            sales with a personalized commerce experience. 
          </p>
        </div>
    </Layout>
    )
  }
}

export default Index
