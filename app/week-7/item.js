export default function Item({ props }) {
  let { name, quantity, category } = props;
  return (
    <div className="bg-[#131E3A] rounded-md p-4 m-2 shadow-md hover:bg-[#1E2A59] transition cursor-default">
      <h3 className="font-bold text-white text-lg">{name}</h3>
      <p className="text-gray-300">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
