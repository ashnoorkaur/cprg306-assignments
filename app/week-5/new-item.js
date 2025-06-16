"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    console.log({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main className="bg-gray-900 flex">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg space-y-4"
      >

        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300"
        />

        <div className="flex justify-between space-x-4">
          <div className="p-3 bg-white text-white w-60 shadow border-gray-800 rounded">
            <div className="flex justify-between">
              <span className="text-black py-2 text-2xl">{quantity}</span>
              <div className="flex">
                <button
                  onClick={decrement}
                  type="button"
                  disabled={quantity === 1}
                  className="px-5.5 py-0 rounded cursor-pointer text-2xl bg-gray-600 disabled:bg-gray-300"
                >
                  -
                </button>
                <button
                  onClick={increment}
                  type="button"
                  disabled={quantity === 20}
                  className="px-5.5 py-2 rounded ml-3 text-2xl cursor-pointer bg-blue-950 disabled:bg-blue-200 hover:bg-blue-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 rounded border border-gray-300 text-black"
          >
            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-800 transition font-semibold text-lg"
        >
          +
        </button>
      </form>
    </main>
  );
}
