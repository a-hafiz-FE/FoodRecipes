import React from 'react'
import SkeltonCard from '../Components/SkeltonCard'
import { useSearch } from '../Services/SearchContext'

const Loading = () => {
  const {meals} = useSearch()
  return (
    <>
      <div className='bg-white grid grid-cols-3 h-fit gap-4 py-10 px-20 text-white'>
        {meals.map(meal => (
          <SkeltonCard
            key={meal.idMeal}
          />
        ))}
      </div>
    </>
  )
}

export default Loading