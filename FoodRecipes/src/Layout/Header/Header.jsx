import { IoMenu } from "react-icons/io5";
import CustomImage from '../../Components/CustomImage';
import SearchBar from './Components/SearchBar';
import NavBar from "./Components/NavBar";
import { CgProfile } from "react-icons/cg";
import { useSearch } from "../../Services/SearchContext";

const Header = () => {

  const {isOr, handleMenu, handleIsOr} = useSearch()


  return (
    <div className='bg-white h-20 flex px-10 items-center'>

      <section className='flex gap-2.5 items-center flex-1'>
        <div onClick={handleMenu}>
          <IoMenu className='size-6.5 cursor-pointer' />
        </div>
        <CustomImage imgSrc={'../../src/assets/Cookpal.svg'} imgAlt={'Logo'} className={''} />

        <button 
          onClick={handleIsOr} 
          className="bg-[#509e2f] ml-2 px-4 py-1 rounded-full cursor-pointer">
            <div className={`${isOr ? 'translate-x-3' : '-translate-x-3'} 
            size-4 bg-white rounded-full transition-transform duration-300 ease-in-out text-[10px]`}>{`${isOr ? 'O' : 'A'}`}</div>
          </button>
      </section>

      <section className='flex items-center px-1 flex-2'>
        < SearchBar />
      </section>

      <section className='flex justify-center items-center flex-1'>
        <NavBar />
      </section>

      <section className='flex justify-end items-center'>
        <div className=" bg-[#509E2F] p-2 rounded-full">
          <CgProfile className="size-6 text-white"/>
        </div>
      </section>
    </div>
  )
}

export default Header