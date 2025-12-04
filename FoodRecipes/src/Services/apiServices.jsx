
const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

export const fetchMealsByName = async (name) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${name}`)
  const data = await res.json()
  return data.meals
}

export const fetchMealsByIngredient = async (ingredient) => {
  const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`)
  const data = await res.json()
  return data.meals
}

export const fetchMealsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`)
  const data = await res.json()
  return data.meals
}

export const fetchMealsByArea = async (area) => {
  const res = await fetch(`${BASE_URL}/filter.php?a=${area}`)
  const data = await res.json()
  return data.meals
}

export const fetchMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
  const data = await res.json()
  return data.meals
}

export const fetchAllCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.php`)
  const data = await res.json()
  return data.categories.map(item => ({
    id: item.idCategory,
    name: item.strCategory,
    image: item.strCategoryThumb,
  }))
}

export const fetchAllAreas = async () => {
  const res = await fetch(`${BASE_URL}/list.php?a=list`)
  const data = await res.json()
  return data.meals.map(item => item.strArea)
}

export const fetchAllIngredient = async () => {
  const res = await fetch(`${BASE_URL}/list.php?i=list`)
  const data = await res.json()
  return data.meals.map(item => ({
    id: item.idIngredient,
    name: item.strIngredient,
    image: item.strThumb,
  }))
}