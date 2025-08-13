"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (count < 20) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: count,
      category: category,
    };

    onAddItem(item);
    setName("");
    setCount(1);
    setCategory("produce");
  };

  let buttonStyles = "text-2xl mt-4 bg-blue-500 text-white p-4 ml-5 rounded";
  if (count >= 20) buttonStyles += " opacity-50 cursor-not-allowed";

  let buttonStylesMinus =
    "text-2xl mt-4 bg-blue-500 text-white p-4 ml-5 rounded";
  if (count <= 1) buttonStylesMinus += " opacity-50 cursor-not-allowed";

  return (
    <main className="min-h-screen bg-gray-100 p-10 flex items-center justify-center font-sans">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Add New Item
        </h1>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Item Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={handleNameChange}
            placeholder="Enter item name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">
              Quantity
            </label>
            <div className="flex items-center">
              <span className="text-lg font-medium text-black">{count}</span>
              <button
                type="button"
                className={buttonStyles}
                onClick={increment}
              >
                +
              </button>
              <button
                type="button"
                className={buttonStylesMinus}
                onClick={decrement}
              >
                -
              </button>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}