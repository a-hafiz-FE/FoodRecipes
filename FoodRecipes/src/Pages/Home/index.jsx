import Main from '../../Layout/Main'
import RecipeCard from '../../Components/RecipeCard'
import { useSearch } from '../../Services/SearchContext'
import { useState } from 'react'

const Home = () => {

  const { 
    meals,
    loading,
    error, 
  } = useSearch();

  if (loading) {
    return <h2 className='flex items-center justify-center h-screen'>Loading recipes ...</h2>;
  }

  if (error) {
    return <h2 className='text-red-600 flex items-center justify-center h-screen'>Error: {error}</h2>;
  }

  if (meals.length === 0) {
    return <h2 className='flex items-center justify-center h-screen'>no data found</h2>
  }

  return (
    <div className='bg-white grid grid-cols-3 gap-2 items-center py-10 px-40 justify-center text-white'>
      {meals.map(meal => (
        <RecipeCard 
          key={meal.idMeal} 
          image={meal.strMealThumb} 
          title={meal.strMeal} 
          video={meal.strYoutube} 
          date={meal.dateModified}
          category={meal.strCategory} 
        />
      ))}
    </div>
  )
}

export default Main(Home)