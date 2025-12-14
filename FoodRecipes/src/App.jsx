import './App.css'
import Home from './Pages/Home'
import { useSearch } from './Services/SearchContext'
import RecipePage from './Pages/Home/RecipePage'
import {
  Route,
  Routes
} from 'react-router-dom';

function App() {

  const { meals } = useSearch()

  return (
    <>
      <Routes>
        <Route path="/"
          element={<Home />} />
        {meals.map(meal => (
          <Route key={meal.idMeal} path={`/${meal.idMeal}`}
            element={<RecipePage
              id={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              video={meal.strYoutube}
              date={meal.dateModified}
              category={meal.strCategory}
              area={meal.strArea}
            />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
