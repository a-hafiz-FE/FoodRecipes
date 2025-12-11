import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useSearch } from '../Services/SearchContext'
import SideMenu from './Side/SideMenu'
import { useState } from 'react'

const Main = (WrappedComponent) => {

  const hocComponent = (props) => {
    const { menu } = useSearch()
    return (
      <>
        <Header />
        <div className="flex flex-row min-h-[calc(100vh-5rem)]">
          {/* Animated sidebar container */}
          <div
            className={`
              transition-all duration-300 overflow-hidden
              ${menu ? 'w-64' : 'w-0'}
            `}
          >
            <SideMenu />
          </div>

          {/* Main content that gets pushed */}
          <div className="flex-1 transition-all duration-300">
            <WrappedComponent {...props} />
          </div>
        </div>
        <Footer />
      </>
    )
  }
  return hocComponent;
}

export default Main
