"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [nextId, setNextId] = useState(1);

  const increment = () => {
    if (count < 20) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: nextId,
      name,
      quantity: count,
      category,
    };

    onAddItem(item);
    setNextId(nextId + 1);
    setName("");
    setCount(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Item name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-md px-4 py-2 bg-white text-black focus:outline-none"
      />

      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-3 bg-[#0A122A] rounded-md px-4 py-2">
          <button
            type="button"
            onClick={decrement}
            disabled={count <= 1}
            className="bg-gray-700 text-white rounded px-3 py-1 disabled:opacity-50"
          >
            -
          </button>
          <span className="text-white text-xl">{count}</span>
          <button
            type="button"
            onClick={increment}
            disabled={count >= 20}
            className="bg-blue-700 text-white rounded px-3 py-1 disabled:opacity-50"
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md px-4 py-2 text-black bg-white w-40"
        >
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

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-md py-2 text-white font-semibold"
      >
        +
      </button>
    </form>
  );
}
