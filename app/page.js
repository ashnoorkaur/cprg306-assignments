import Link from "next/link";

export default function Home() {
  return (
     <main>
      <h1 className="text-center mx-auto text-4xl mt-15">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="./week-2" className="text-blue-400 hover:underline text-center mx-auto">Link to the week-2 page</Link>
      </p>
    </main>
  );
}
