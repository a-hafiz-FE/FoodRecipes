import { useState } from 'react'
import { useSearch } from '../../Services/SearchContext'
import Typography from '../../Components/Typography'
import { IoIosArrowDown } from "react-icons/io";

const SideMenu = () => {

  const [areaDropDown, setAreaDropDown] = useState(false)
  const [ingrediantDropDown, setIngrediantAreaDropDown] = useState(false)

  const {
    areas,
    selectedArea,

    ingredients,
    selectedIngredient,
    
    handleFilterChange,
    menu,
  } = useSearch()

  const handleAreaSelect = (selectedArea) => {
    handleFilterChange({
      area: selectedArea === 'All Areas' ? '' : selectedArea,
    })
    setAreaDropDown(false)
  }

  const handleIngredientSelect = (selectedIngredient) => {
    handleFilterChange({
      ingredient: selectedIngredient === 'All Ingredians' ? '' : selectedIngredient,
    })
    setIngrediantAreaDropDown(false)
  }


  return (
    <>
      <aside className={`
          bg-[#509E2F] shadow-lg 
          w-64 border-r border-gray-200`}>
        <div className='flex flex-col p-2'>
          <button
            onClick={() => { setAreaDropDown(prev => !prev) }}
            className='flex items-center justify-between bg-[#38990f] gap-1 p-2 rounded-md hover:bg-[#76a662] cursor-pointer'
          >
            <Typography className={'font-bold'}>Areas</Typography>
            <IoIosArrowDown className={`transition-all duration-300 ${areaDropDown ? "rotate-180" : ""}`} />
          </button>
          {areaDropDown &&
            <div className={`flex flex-col gap-1`}>
              <label className='flex items-center bg-[#38990f] gap-1 p-1 mt-1 ml-4 rounded-md hover:bg-[#76a662] cursor-pointer'>
                <input
                  value='All Areas'
                  type='radio'
                  checked={selectedArea === ''}
                  onChange={() => handleAreaSelect('All Areas')}
                  className='mr-2' />
                {'All Areas'}
              </label>
              {areas.map((area) => (
                <label key={area} className='flex items-center bg-[#38990f] gap-1 p-1 ml-4 rounded-md hover:bg-[#76a662] text-nowrap cursor-pointer'>
                  <input
                    value={area}
                    type='radio'
                    checked={selectedArea === area}
                    onChange={() => handleAreaSelect(area)}
                    className='mr-2' />
                  {area}
                </label>
              ))}
            </div>}

            <button
            onClick={() => { setIngrediantAreaDropDown(prev => !prev) }}
            className='flex items-center justify-between bg-[#38990f] gap-1 mt-2 p-2 rounded-md hover:bg-[#76a662] cursor-pointer'
          >
            <Typography className={'font-bold'}>Ingredians</Typography>
            <IoIosArrowDown className={`transition-all duration-300 ${ingrediantDropDown ? "rotate-180" : ""}`} />
          </button>
          {ingrediantDropDown &&
            <div className={`grid grid-cols-3 gap-2 mt-1`}>
              <div 
                className='flex items-center justify-center bg-[#38990f] gap-1 p-1 mt-1 ml-4 rounded-md hover:bg-[#76a662] cursor-pointer'
                onClick={() => handleIngredientSelect('')}>
                {'All'}
              </div>
              {ingredients.map((ingredient) => (
                <label key={ingredient.id} className='flex items-center bg-[#38990f] gap-1 p-1 ml-4 rounded-md hover:bg-[#76a662] cursor-pointer'>
                    <img src={ingredient.image} alt={ingredient.name} className='size-16' onClick={() => handleIngredientSelect(ingredient.name)} />
                </label>
              ))}
            </div>}
        </div>
      </aside>
    </>
  )
}

export default SideMenu