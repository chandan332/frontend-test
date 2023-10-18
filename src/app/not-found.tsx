import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-fit m-auto">
      <h2 className="text-blue-900 my-4 text-6xl font-bold">Not Found!</h2>
      <button className="block m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
}
