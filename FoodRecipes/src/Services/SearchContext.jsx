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

  const [menu, setMenu] = useState(false)
  const [isOr, setIsOr] = useState(false)

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

  const handleIsOr = () => {
    const nextMode = !isOr
    setIsOr(prev => !prev)

    const filters = getCurrentFilters()
    searchMeals(filters, nextMode)
  }

  const handleMenu = () => {
    setMenu(prev => !prev)
  }

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
    }, 800);
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

  const searchMeals = async ({ name, ingredient, category, area }, orLogic = isOr) => {
    setLoading(true);
    setError(null);

    try {

      if (!name && !category && !ingredient && !area) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        const list = data.meals || [];

        setMeals(list);
        setTimeout(() => {
          setLoading(false);
        }, 800)
        return;
      }

      let results = [];
      const promises = [];

      if (name) promises.push(fetchMealsByName(name));
      if (ingredient) promises.push(fetchMealsByIngredient(ingredient));
      if (category) promises.push(fetchMealsByCategory(category));
      if (area) promises.push(fetchMealsByArea(area));

      const allResults = await Promise.all(promises);
      console.log(allResults)

      if (orLogic) {
        const merged = allResults
          .filter(Boolean)
          .flat();

        // dedupe by idMeal
        const map = new Map();
        merged.forEach(meal => {
          if (!map.has(meal.idMeal)) {
            map.set(meal.idMeal, meal);
          }
        });

        results = Array.from(map.values());
      } else {
        // Intersect results by idMeal
        results = allResults.filter(Boolean).reduce((acc, curr) => {
          if (acc.length === 0) return curr;
          const ids = new Set(curr.map(meal => meal.idMeal));
          return acc.filter(meal => ids.has(meal.idMeal));
        }, []);
      }

      if (results.length === 0) {
        setMeals([]);
        setTimeout(() => {
          setLoading(false);
        }, 800);
        return;
      }

      const detailedMeals = await Promise.all(
        results.map(meal => fetchMealById(meal.idMeal))
      );

      const finalResults = detailedMeals.filter(Boolean);
      console.log('final Resluts:', finalResults)


      setMeals(finalResults);
      setTimeout(() => {
        setLoading(false);
      }, 800)
    } catch (err) {
      setError('Failed to fetch meals with filters');
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
    fetchMealById,

    menu,
    handleMenu,

    isOr,
    handleIsOr,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};


export const useSearch = () => useContext(SearchContext);