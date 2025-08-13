"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main>
      <section className="flex items-center my-5">
        <label className="mr-2 text-black">Sort By:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`py-2 px-3 border rounded text-white ${
            sortBy === "name" ? "bg-indigo-700" : "bg-indigo-950"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`py-2 px-3 border rounded text-white ml-2 ${
            sortBy === "category" ? "bg-indigo-700" : "bg-indigo-950"
          }`}
        >
          Category
        </button>
      </section>

      <section>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </section>
    </main>
  );
}