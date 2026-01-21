import Main from '../../Layout/Main'
import RecipeCard from '../../Components/RecipeCard'
import {
  fetchMealsByName,
  createNewProduct,
} from '../../Services/apiServices'
import { useQuery } from '@tanstack/react-query'
import Header from '../../Layout/Header/Header'
import { useState } from 'react'



const Home = () => {

  const [searchValue, setSearchValue] = useState("")

  const { data: meals, error } = useQuery({
    queryKey: ["mealsData", searchValue],
    queryFn: () => fetchMealsByName(searchValue),
    staleTime: 0.5 * 60 * 1000,
    refetchOnMount: true,
    gcTime: 0.5 * 60 * 1000,
    retry: 2,
    retryDelay: 60 * 1000,
    select: (res) => res.meals ?? [],
  });

  console.log(meals)
  console.log("searchValue: " + searchValue)

  const handleSearchValue = (name) => {
    setSearchValue(name)
    console.log("Input Value: " + name)
  }

  


  if (error) {
    return <div>error</div>
  }

  return (
    <>
      <div className='flex flex-col'>
        

        <Header handleSearchValue={handleSearchValue} searchValue={searchValue} />

        

        <div className='bg-white grid grid-cols-3 h-fit gap-4 py-10 px-20 text-white'>
          {meals?.map(meal => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              video={meal.strYoutube}
              date={meal.dateModified}
              category={meal.strCategory}
              area={meal.strArea}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home