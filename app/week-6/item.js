export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#1a1a2e] text-white rounded p-4 mb-4 shadow-md">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-sm text-gray-300">Buy {quantity} in {category}</p>
    </li>
  );
}
