import Link from "next/link";

export default function Home() {
   let linkStyles = "text-center mx-auto text-blue-400 hover:underline";

  return (
     <main className="p-4 bg-gray-950 text-white min-h-screen">
      <h1 className="text-center mx-auto text-4xl mt-15">CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href="./week-2" className={linkStyles}>Link to the week-2 page</Link></p>
      <p><Link href="./week-3" className={linkStyles}>Link to the week-3 page</Link></p>

    </main>
  );
}
