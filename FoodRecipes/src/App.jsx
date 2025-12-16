import { lazy } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'))
const RecipePage = lazy(() => import('./Pages/Home/RecipePage'))

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/recipe/:id`} element={<RecipePage />} />
      </Routes>
    </>
  )
}

export default App
