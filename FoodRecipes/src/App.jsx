import { lazy } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

const Quotes = lazy(() => import('./Pages/Quotes/Quotes'))
const Products = lazy(() => import('./Pages/Products/Products'))
const Home = lazy(() => import('./Pages/Home'))
const RecipePage = lazy(() => import('./Pages/Home/RecipePage'))

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path={`/recipe/:id`} element={<RecipePage />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={"/"} element={<Quotes />} />
      </Routes>
    </>
  )
}

export default App
