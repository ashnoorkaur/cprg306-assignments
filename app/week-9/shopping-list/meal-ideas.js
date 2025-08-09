import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                console.log(response.status);
            }
            console.dir(response);

            const rawdata = await response.json();
            // console.dir(rawdata);
            console.log(rawdata);
            setMeals(rawdata.meals);
        } catch (error) {
            console.log(error);
        }
    }

    const loadMealIdeas = async () => {
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals || []);
        } else {
            setMeals([]);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    let content;
    if (!ingredient) {
        content = (
            <p className="text-center text-lg">Select an item to see meal ideas</p>
        );
    } else if (meals.length > 0) {
        content = (
            <div>
                <p className="text-center text-lg">Here are some meal ideas using {ingredient}:</p>
                {meals.map((meal) => (
                    <p key={meal.idMeal} className="mb-2 p-2 bg-purple-700 rounded-md hover:bg-purple-600 transition duration-200 cursor-pointer">
                        {meal.strMealThumb && (<img src={meal.strMealThumb} className="inline-block w-12 h-12 mr-2 rounded" />)}
                        {meal.strMeal}
                    </p>
                ))}
            </div>
        );
    } else {
        content = (
            <p className="text-center text-lg">No meal ideas found for {ingredient}</p>
        );
    }

    return (
        <div className="flex-1 p-4 bg-purple-800 rounded-lg shadow-md text-white">
            <header className="text-2xl font-bold mb-4 text-center">Meal Ideas</header>
            <p className="text-sm text-white"></p>
            {content}
        </div>
    );
}