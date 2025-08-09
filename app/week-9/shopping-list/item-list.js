"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  let itemsArray = [...items];
  const [sortBy, setSortBy] = useState("name");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  itemsArray.sort((a, b) => {
    const aValue = a[sortBy].toString().toUpperCase();
    const bValue = b[sortBy].toString().toUpperCase();
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });

  return (
    <section>
      <div className="mb-6 flex items-center gap-4">
        <label className="text-white font-semibold">Sort by:</label>
        <select
          onChange={handleSortByChange}
          value={sortBy}
          className="bg-[#131E3A] text-white rounded-md px-3 py-2"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {itemsArray.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </div>
    </section>
  );
}
