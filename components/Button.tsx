"use client";
import WishlistContext from "@/app/context/WishlistContext";
import { useContext } from "react";
export default function Button({ jobData }: { jobData: JobData }) {
  const { addToWishlist, removeFromWishlist, isInWishList } =
    useContext(WishlistContext);
  const clickHandler = isInWishList(jobData.id)
    ? removeFromWishlist
    : addToWishlist;

  return (
    <button
      onClick={() => clickHandler(jobData)}
      className={`bg-purple-600 text-white rounded-sm px-2 py-2 w-32 ${
        isInWishList(jobData.id) ? "bg-green-600" : "bg-purple-600"
      }`}
    >
      {isInWishList(jobData.id) ? "Saved" : "Save for Later"}
    </button>
  );
}
