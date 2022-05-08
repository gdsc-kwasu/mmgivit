import React from 'react'
import propTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default PageLayout

propTypes.Layout = {
  children: propTypes.node.isRequired,
}
