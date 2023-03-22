import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">
        <Link href="/">Hacker Jobs</Link>
      </h1>
      <Link href="/wishlist"> Wishlist</Link>
    </header>
  );
}
