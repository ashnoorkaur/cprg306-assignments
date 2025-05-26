import Link from "next/link";

export default function StudentInfo(){
    return(
        <main>
            <h1>Ashnoor Kaur</h1>
             <p>
                <Link href="https://github.com/ashnoorkaur/cprg306-assignments" className="text-blue-400 hover:underline">https://github.com/ashnoorkaur/cprg306-assignments</Link>
            </p>
        </main>
    )
}