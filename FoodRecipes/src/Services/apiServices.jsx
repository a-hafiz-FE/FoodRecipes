import axios from 'axios'
import { data } from 'react-router-dom';

const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

// export const fetchMealsByName = async (name) => {
//   const res = await fetch(`${BASE_URL}/search.php?s=${name}`)
//   const data = await res.json()
//   return data.meals
// }

export const fetchMealsByName = async (name) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
  return res.data;
};

// export const fetchMealsByIngredient = async (ingredient) => {
//   const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`)
//   const data = await res.json()
//   return data.meals
// }

export const fetchMealsByIngredient = async (ingredient) => {
  const res = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
  return res.data;
};

// export const fetchMealsByCategory = async (category) => {
//   const res = await fetch(`${BASE_URL}/filter.php?c=${category}`)
//   const data = await res.json()
//   return data.meals
// }

export const fetchMealsByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
  return res.data;
};

// export const fetchMealsByArea = async (area) => {
//   const res = await fetch(`${BASE_URL}/filter.php?a=${area}`)
//   const data = await res.json()
//   return data.meals
// }

export const fetchMealsByArea = async (area) => {
  const res = await axios.get(`${BASE_URL}/filter.php?a=${area}`);
  return res.data;
};

// export const fetchMealById = async (id) => {
//   const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
//   const data = await res.json()
//   return data.meals?.[0] || null
// }

export const fetchMealById = async (id) => {
  const res = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return res.data;
};

// export const fetchAllCategories = async () => {
//   const res = await fetch(`${BASE_URL}/categories.php`)
//   const data = await res.json()
//   return data.categories.map(item => ({
//     id: item.idCategory,
//     name: item.strCategory,
//     image: item.strCategoryThumb,
//   }))
// }

export const fetchAllCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data;
};

// export const fetchAllAreas = async () => {
//   const res = await fetch(`${BASE_URL}/list.php?a=list`)
//   const data = await res.json()
//   return data.meals.map(item => item.strArea)
// }

export const fetchAllAreas = async () => {
  const res = await axios.get(`${BASE_URL}/list.php?a=list`);
  return res.data;
};

// export const fetchAllIngredient = async () => {
//   const res = await fetch(`${BASE_URL}/list.php?i=list`)
//   const data = await res.json()
//   return data.meals.map(item => ({
//     id: item.idIngredient,
//     name: item.strIngredient,
//     image: item.strThumb,
//   }))
// }

export const fetchAllIngredient = async () => {
  const res = await axios.get(`${BASE_URL}/list?.phpi=list`);
  return res.data;
};

//this is for react query mutations
export const createNewProduct = async (newProduct) => {
  const res = await axios.post('https://dummyjson.com/products/add', newProduct);
  return res.data
}

//fetch all products
export const fetchAllProducts = async () => {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data;
};

//delete a product
export const deleteProduct = async (id) => {
  const res = await axios.delete(`https://dummyjson.com/products/${id}`);
  return res.data;
};

//update product
export const updateProduct = async (id, updatedProduct) => {
  const res = await axios.put(`https://dummyjson.com/products/${id}`, updatedProduct);
  return res.data;
};