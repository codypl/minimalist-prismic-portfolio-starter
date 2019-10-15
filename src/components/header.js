import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"
import Logo from "../images/logo.png"

const Header = ({ data }) => (
  <header>
      <img id="logo" src={Logo} alt="Logo" />
      <h1>
        <Link id="title">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <h2>
          {data.site.siteMetadata.author}
      </h2>
  </header>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
Header.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
