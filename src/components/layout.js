import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`
  //const isRootPath = location.pathname === rootPath
  return (
    <div>
      <Header/>
      <div className="container-fluid mx-5">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
