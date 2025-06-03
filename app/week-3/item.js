export default function Item(name, quantity, category){
    return (
        <div>
            <li className="m-10 p-1.5 rounded">
                <p className="font-bold ml-15">{name}</p>
                <p> Buy {quantity} in {category}</p>
            </li>
        </div>
    );
}   