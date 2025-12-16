import React, { useEffect, useState } from 'react'
import Main from '../../Layout/Main'
import Typography from '../../Components/Typography'
import { useSearch } from '../../Services/SearchContext'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  const { id } = useParams()
  const { fetchMealById } = useSearch()
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    const getMeal = async () => {
      const data = await fetchMealById(id)
      setMeal(data)
    }
    getMeal()
  }, [id])

  useEffect(() => {
    if (meal) {
      console.log("Fetched meal:", meal)
    }
  }, [meal])

  if (meal === null) {
    return <div className="text-center mt-20 text-red-600">Meal not found!</div>
  }

  if (!meal) {
    return <div className="text-center mt-20">Loading...</div>
  }

  return (
    <>
      <div className='bg-amber-400 items-center justify-center flex flex-col gap-2 mt-20 mx-64'>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} className='h-120 w-full rounded-2xl object-fill' />
        <Typography className={'text-[40px] font-bold self-start pl-4 mt-4'}>{meal?.strMeal}</Typography>
      </div>
    </>
  )
}

export default Main(RecipePage)