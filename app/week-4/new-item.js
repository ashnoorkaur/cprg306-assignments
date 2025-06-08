"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main className="flex">
      <div className="p-3 m-5 bg-white text-white w-55">
        <div className="flex justify-between">
          <span className="text-black py-2 text-2xl">{quantity}</span>
          <div className="flex">
            <button
              onClick={decrement}
              disabled={quantity === 1}
              className="px-5.5 py-2 rounded cursor-pointer text-2xl bg-gray-600 disabled:bg-gray-300"
            >
              -
            </button>
            <button
              onClick={increment}
              disabled={quantity === 20}
              className="px-5.5 py-2 rounded ml-3 text-2xl cursor-pointer bg-blue-950 disabled:bg-blue-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
