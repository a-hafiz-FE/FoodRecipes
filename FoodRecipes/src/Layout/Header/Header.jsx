import { IoMenu } from "react-icons/io5";
import CustomImage from '../../Components/CustomImage';
import SearchBar from './Components/SearchBar';
import NavBar from "./Components/NavBar";
import { CgProfile } from "react-icons/cg";


const Header = ({handleSearchValue, searchValue}) => {


  return (
    <div className='bg-white h-20 flex px-10 items-center'>

      <section className='flex gap-2.5 items-center flex-1'>
        <CustomImage imgSrc={'../../src/assets/Cookpal.svg'} imgAlt={'Logo'} className={''} />
      </section>

      <section className='flex items-center px-1 flex-2'>
        < SearchBar handleSearchValue={handleSearchValue} searchValue={searchValue}/>
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
};

export default Header