"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-[#0A122A] flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      <div className="bg-[#131E3A] p-6 rounded-lg shadow-lg w-full max-w-md">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="mt-8 w-full max-w-4xl">
        <ItemList items={items} />
      </div>
    </main>
  );
}
