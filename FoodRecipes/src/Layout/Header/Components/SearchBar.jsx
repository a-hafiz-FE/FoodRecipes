import React, { useState, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Typography from '../../../Components/Typography';
import CustomImage from '../../../Components/CustomImage';

const SearchBar = ({ handleSearchValue, searchValue }) => {


  return (
    <section className='relative w-full flex items-center gap-2 bg-[#F3F3F3] pl-3 rounded-md'>

      <input
        placeholder='Search For Recipes ...'
        value={searchValue}
        onChange={(e) => handleSearchValue(e.target.value)}
        type="text"
        className='outline-none w-full text-black'
      />

      <div
        className='flex items-center bg-[#509E2F] rounded-r-md px-3 py-2.5 cursor-pointer hover:bg-[#96dc79]'
      >
        <IoIosSearch className='size-6 text-white' />
      </div>
    </section>
  )
}

export default SearchBar