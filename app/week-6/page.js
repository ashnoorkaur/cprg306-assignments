import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="p-4 bg-gray-950 text-white">
            <h1 className="text-3xl font-bold mb-4 text-white-800 text-center mx-auto">Shopping List</h1>
            <ItemList /> 
        </main>
    );
}