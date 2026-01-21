import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useSearch } from '../Services/SearchContext'
import SideMenu from './Side/SideMenu'
import Home from '../Pages/Home'

const Main = () => {
    // use state with search input
    // when it updates it passes data to Home
  
    return (
      <>
        <Header 
        //setSearchValue={} 
        />

        show search value
        

        
        <div className="flex flex-row min-h-[calc(100vh-5rem)]">
          {/* Animated sidebar container */}
          {/* <div
            className={`
              transition-all duration-300 overflow-hidden
              ${menu ? 'w-64' : 'w-0'}
            `}
          >
            <SideMenu />
          </div> */}

          {/* Main content that gets pushed */}
          <div className="flex-1 transition-all duration-300">
            <Home searchValue={""} />
          </div>
        </div>
        <Footer />
      </>
    )
  }


export default Main
