export default function Item({ item, onSelect }) {
  let { name, quantity, category } = item;
  return (
    <div
      onClick={onSelect}
      className="bg-green-100 hover:bg-green-300 text-black border-2 border-green-500 w-full max-w-sm m-2 p-3 rounded-xl cursor-pointer"
    >
      <h3 className="text-green-900 font-semibold font-sans text-lg">{name}</h3>
      <p className="text-sm">
        Quantity: {quantity} | Category: {category}
      </p>
    </div>
  );
}