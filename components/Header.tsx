"use client";
import WishlistContext from "@/app/context/WishlistContext";
import Link from "next/link";
import { useContext } from "react";
export default function Header() {
  const { wishlist } = useContext(WishlistContext);
  return (
    <header className="flex justify-between items-center w-full h-16 px-6 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">
        <Link href="/">Hacker Jobs</Link>
      </h1>
      <Link href="/wishlist" className="underline underline-offset-4 text-lg font-semibold text-green-600">
        {wishlist.length} Jobs in Wishlist
      </Link>
    </header>
  );
}
