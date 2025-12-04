import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import {
  fetchMealsByName,
  fetchMealsByIngredient,
  fetchMealsByCategory,
  fetchMealsByArea,
  fetchMealById,
  fetchAllCategories,
  fetchAllAreas,
  fetchAllIngredient,
} from './apiServices'

export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

  const [currentInput, setCurrentInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedIngredient, setSelectedIngredient] = useState("")

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const debounceRef = useRef(null);

  const getCurrentFilters = () => ({
    name: currentInput,
    category: selectedCategory,
    ingredient: selectedIngredient,
    area: selectedArea,
  });

  const triggerDebouncedSearch = (filters) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchMeals(filters);
    }, 400);
  };

  const handleFilterChange = ({ name, category, ingredient, area }) => {
    const merged = {
      name: name ?? currentInput,
      category: category ?? selectedCategory,
      ingredient: ingredient ?? selectedIngredient,
      area: area ?? selectedArea,
    }

    setCurrentInput(merged.name)
    setSelectedCategory(merged.category)
    setSelectedArea(merged.area)
    setSelectedIngredient(merged.ingredient)

    triggerDebouncedSearch(merged)
  }

  const handleSearchTrigger = () => {
    searchMeals({
      ...getCurrentFilters(),
      category:
        selectedCategory === 'All Categories' ? '' : selectedCategory,
      area:
        selectedArea === 'All' ? '' : selectedArea,
      ingredient:
        selectedIngredient === 'All' ? '' : selectedIngredient,
    });
  }

  const handleInputUpdate = (value) => {
    setCurrentInput(value)
  }

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName)
  }

  useEffect(() => {
    const loadOptiones = async () => {
      try {
        const [categoryList, areaList, ingredientList] = await Promise.all([
          fetchAllCategories(),
          fetchAllAreas(),
          fetchAllIngredient(),
        ]);

        setCategories(categoryList);
        setAreas(areaList);
        setIngredients(ingredientList);
      } catch (err) {
        console.log(`failed to load Options ${err}`)
      }
    };
    loadOptiones();
    searchMeals({ name: "", category: "", ingredient: "", area: "" });
  }, [])

  const searchMeals = async ({ name, ingredient, category, area }) => {
    setLoading(true);
    setError(null);

    try {
      let results = [];
      const promises = [];

      if (name) promises.push(fetchMealsByName(name));
      if (ingredient) promises.push(fetchMealsByIngredient(ingredient));
      if (category) promises.push(fetchMealsByCategory(category));
      if (area) promises.push(fetchMealsByArea(area));

      const allResults = await Promise.all(promises);
      console.log(allResults)

      if (!name && !category && !ingredient && !area) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        setTimeout(() => {
          setMeals(data.meals || []);
          setLoading(false);
        }, 300)
        return;
      } else {
        // Intersect results by idMeal
        results = allResults.reduce((acc, curr) => {
          if (acc.length === 0) return curr;
          const ids = new Set(curr.map(meal => meal.idMeal));
          return acc.filter(meal => ids.has(meal.idMeal));
        }, []);
      }
      console.log(results)
      setTimeout(() => {
        setMeals(results)
      }, 300)
    } catch (err) {
      setError('Failed to fetch meals with filters');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    meals,
    categories,
    areas,
    ingredients,

    loading,
    error,
    
    selectedArea,
    selectedIngredient,
    selectedCategory,
    currentInput,

    handleFilterChange,
    handleSearchTrigger,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};


export const useSearch = () => useContext(SearchContext);