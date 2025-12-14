import React, { useState, useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Typography from '../../../Components/Typography';
import { useSearch } from '../../../Services/SearchContext';
import CustomImage from '../../../Components/CustomImage';

const SearchBar = () => {

  const ref = useRef(null)

  const {
    categories,
    selectedCategory,
    currentInput,

    handleFilterChange,
    handleSearchTrigger, } = useSearch()

  const [isDropDown, setIsDropDown] = useState(false)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchTrigger()
      // alert(`You pressed Enter! Input: ${currentInput}`)
      console.log(`You pressed Enter! Input: ${currentInput}`)
    }
  }

  const handleDropDown = () => {
    setIsDropDown(prev => !prev)
    ref.current.focus()
  }

  const handleCategorySelect = (categoryName) => {
    handleFilterChange({
      category: categoryName === "All Categories" ? '' : categoryName
    })
    setIsDropDown(false)
  }

  return (
    <section className='relative w-full flex items-center gap-2 bg-[#F3F3F3] pl-3 rounded-md'>

      <button
        onClick={handleDropDown}
        className='flex gap-1 items-center cursor-pointer'>
        <Typography >{selectedCategory || "All Categories"}</Typography>
        <IoIosArrowDown className={`transition-all duration-300 ${isDropDown ? "rotate-180" : ""}`} />
      </button>
      {isDropDown &&
        <div ref={ref} className='absolute top-0 z-30 left-0 mt-12 rounded-md border box-border border-black w-1/3 bg-white flex flex-col gap-2'>
          <div
            className='hover:bg-[#509E2F] px-5 py-1 cursor-pointer'
            onClick={() => handleCategorySelect("All Categories")}
          >
            All Categories
          </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className='hover:bg-[#509E2F] focus:bg-[#509e2f] flex px-5 py-1 cursor-pointer'
              onClick={() => handleCategorySelect(cat.name)}
            >
              <div className='flex gap-2'>
                <CustomImage imgSrc={cat.image} imgAlt={cat.name} className={'size-6'} />
                {cat.name}
              </div>
            </div>
          ))}
        </div>}

      <p>|</p>

      <input
        placeholder='Search For Recipes ...'
        value={currentInput}
        onChange={(e) => handleFilterChange({name: e.target.value})}
        onKeyDown={handleKeyPress}
        type="text"
        className='outline-none w-full text-black'
      />

      <div
        className='flex items-center bg-[#509E2F] rounded-r-md px-3 py-2.5 cursor-pointer hover:bg-[#96dc79]'
        onClick={handleSearchTrigger}
      >
        <IoIosSearch className='size-6 text-white' />
      </div>
    </section>
  )
}

export default SearchBar