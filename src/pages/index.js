import React from "react"

import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Image from "../components/image"
import SEO from "../components/seo"

import "../style/global.scss"

const IndexPage = props => (
  <Layout>
    <SEO title="Gastby Starter Theme" />
    <Portfolio>
      {props.data.portfolios.edges.map(portfolio => (
        <Image slug={portfolio.node.slugs[0]} data={portfolio.node.data} />
      ))}
    </Portfolio>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
query Portfolio {
  portfolios: allPrismicPortfolio {
    edges {
      node {
        slugs
        data {
          title {
            text
          }
          image {
            url
            alt
          }
        }
      }
    }
  }
}
`
