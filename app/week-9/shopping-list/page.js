"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from "react";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  function cleanItemName(name) {
    let cleanName = name.split(",")[0].trim();
    cleanName = cleanName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
      ""
    ).trim();
    return cleanName;
  }

  const handleItemSelect = (item) => {
    setSelectedItemName(cleanItemName(item.name));
  };

  if (!user) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#0A122A] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        <div className="md:w-1/2 bg-[#131E3A] p-6 rounded-lg shadow-lg">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-8">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
