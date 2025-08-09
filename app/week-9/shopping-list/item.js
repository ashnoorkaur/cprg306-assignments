"use client";

export default function Item({ item, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#131E3A] rounded-md p-4 m-2 shadow-md hover:bg-[#1E2A59] transition cursor-pointer"
    >
      <h3 className="font-bold text-white text-lg">{item.name}</h3>
      <p className="text-gray-300">
        Buy {item.quantity} in {item.category}
      </p>
    </div>
  );
}
