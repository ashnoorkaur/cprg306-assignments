"use client";

import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Failed to fetch meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    }
    loadMealIdeas();
  }, [ingredient]);

  if (!ingredient) {
    return (
      <div className="p-4 text-white">
        Select an item from the shopping list to see meal ideas.
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#131E3A] rounded-md shadow-md max-h-[500px] overflow-auto text-white">
      <h2 className="text-2xl font-semibold mb-4">Meal Ideas for "{ingredient}"</h2>
      {meals.length === 0 ? (
        <p>No meals found for this ingredient.</p>
      ) : (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center gap-3">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-md object-cover"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
