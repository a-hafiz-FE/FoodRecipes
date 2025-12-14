import Main from '../../Layout/Main'
import RecipeCard from '../../Components/RecipeCard'
import SkeltonCard from '../../Components/SkeltonCard'
import { useSearch } from '../../Services/SearchContext'


const Home = () => {

  const {
    meals,
    loading,
    error,
  } = useSearch();



  if (loading) {
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

  if (error) {
    return <h2 className='text-red-600 flex w-full justify-center mt-100'>Error: {error}</h2>;
  }

  if (meals.length === 0) {
    return <h2 className='flex w-full mt-100 justify-center'>no data found</h2>
  }

  return (
    <>
      <div className='bg-white grid grid-cols-3 h-fit gap-4 py-10 px-20 text-white'>
        {meals.map(meal => (
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
    </>
  )
}

export default Main(Home)