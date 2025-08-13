"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

const fetchIngredients = async (mealId) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    const mealDetails = data.meals[0];
    const ingredientsList = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetails[`strIngredient${i}`];
      const measure = mealDetails[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsList.push(`${measure} ${ingredient}`);
      } else {
        break;
      }
    }
    return ingredientsList;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
    setIngredients([]);
    setSelectedMealId(null);
  }, [ingredient]);

  const handleMealSelect = async (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
      setIngredients([]);
    } else {
      const fetchedIngredients = await fetchIngredients(mealId);
      setIngredients(fetchedIngredients);
      setSelectedMealId(mealId);
    }
  };

  return (
    <div className="p-4 ml-4">
      <h2 className="text-2xl font-bold font-serif text-black">Meal Ideas</h2>
      {ingredient ? (
        meals.length > 0 ? (
          <div>
            <p className="my-2 text-black">
              Here are some meal ideas for {ingredient}:
            </p>
            <ul>
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  onClick={() => handleMealSelect(meal.idMeal)}
                  className="bg-white p-2 my-2 rounded-md shadow hover:bg-gray-200 cursor-pointer text-black"
                >
                  <p className="font-bold">{meal.strMeal}</p>        
                  {selectedMealId === meal.idMeal && (
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold">Ingredients:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {ingredients.map((ing, index) => (
                          <li key={index}>{ing}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="my-2 text-black">
            No meal ideas found for {ingredient}.
          </p>
        )
      ) : (
        <p className="my-2 text-black">Select an item to see meal ideas.</p>
      )}
    </div>
  );
}