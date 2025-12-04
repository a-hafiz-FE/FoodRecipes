import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Main = (WrappedComponent) => {

  const hocComponent = (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    )
  }
  return hocComponent;
}

export default Main
