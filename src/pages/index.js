import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="paper">
      <Link to="/" className="btn btn-primary">
        Czytaj dalej
      </Link>
      <Link className="btn btn-outline">O nas</Link>
      <h1 className="">Hello there</h1>
    </div>
  </Layout>
)

export default IndexPage
