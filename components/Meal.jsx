'use client';
import React, { useEffect, useState } from 'react';
import jsonData from '../assets/data.json';


export const Meal = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Pasta');
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
        // setSelectedCategory(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const selectedCategoryData = jsonData.find(category => category.category === selectedCategory);
    if (selectedCategoryData && selectedCategoryData.meals) {
      setSelectedMeals(selectedCategoryData.meals);
    } else {
      setSelectedMeals([]);
    }
  }, [categories, selectedCategory]);

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown when a category is selected
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="my-8">
      <h1 className="text-center text-2xl font-bold mb-4">Shop by Category</h1>
      <h2 className="text-center text-xl font-semibold mb-6">Top Category Of Organic Food</h2>
      
      {/* Mobile dropdown */}
      <div className="block lg:hidden relative">
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-2 cursor-pointer ml-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Select Category
        </button>
        {isDropdownOpen && (
  <div className="absolute bg-gray-100 shadow-lg rounded-md mt-2 w-full z-10">
    {categories.map(category => {
      if (["Chicken", "Beef", "Dessert"].includes(category.strCategory)) {
        return (
          <div key={category.idCategory} className="px-4 py-2 text-gray-700">
            <p  className='flex justify-between'>{category.strCategory.toUpperCase()} <p className='text-sm text-red-500'>  - Currently not available</p></p>
          </div>
        );
      }
      return (
        <div
          key={category.idCategory}
          className={`hover:bg-[#4F6F52] hover:text-[#F8F4E1] text-gray-700 px-4 py-2 cursor-pointer ${category.strCategory === selectedCategory ? 'bg-[#4F6F52] text-[#F8F4E1]' : 'bg-gray-100'}`}
          onClick={() => handleClickCategory(category.strCategory)}
        >
          {category.strCategory.toUpperCase()}
        </div>
      );
    })}
  </div>
)}


      </div>
      
      {/* Desktop scrollable categories */}
      <div className="hidden lg:flex justify-center items-center space-x-4 overflow-x-auto py-4 px-2 w-full ">
        {categories.map(category => (
          <div
            key={category.idCategory}
            onClick={() => handleClickCategory(category.strCategory)}
            className={`flex-shrink-0  hover:bg-[#4F6F52] hover:text-[#F8F4E1] text-gray-700 rounded-full px-4 py-2 cursor-pointer ${category.strCategory === selectedCategory ? 'bg-[#4F6F52] text-[#F8F4E1]' : 'bg-gray-100'}`}
            style={{ minWidth: '150px', textAlign: 'center' }}
          >
            {category.strCategory}
          </div>
        ))}
      </div>

      {/* Meals */}
      <div className="mt-8 hidden md:block">
        {selectedMeals.map((meal, index) => (
          <div key={index} className="flex flex-wrap justify-between items-center mb-4 p-4 border-b border-gray-200">
            <img src={meal.image} alt={meal.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{meal.name}</h3>
              <p className="text-gray-500">{meal.smallInfo}</p>
            </div>
            <div className="text-lg font-semibold">{meal.price}</div>
            <button className="bg-[#4F6F52] text-white px-4 py-2 rounded-full ml-4">Shop Now</button>
          </div>
        ))}
      </div>

      <div className="mt-8 block md:hidden">
        {selectedMeals.map((meal, index) => (
          <div key={index} className="flex  justify-left items-center mb-4 p-4 border-b border-gray-200">
            <img src={meal.image} alt={meal.name} className="w-14 h-14 rounded-full object-cover" />
             <div className='flex flex-col pl-2'>
            <div className="flex-1 ml-4 ">
              <h3 className="text-lg font-semibold">{meal.name}</h3>
              <p className="text-gray-500 text-sm overflow-hidden">{meal.smallInfo}</p>
            </div>
            <div className='flex items-center  pl-4 '>
            <div className="text-md font-semibold">{meal.price}</div>
            <button className="bg-[#4F6F52] text-white font-semibold px-3 py-2 rounded-full ml-4">Shop Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

