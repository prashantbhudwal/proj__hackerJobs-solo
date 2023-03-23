"use client";
import { createContext } from "react";

export type WishlistContextType = {
  wishlist: JobData[];
  addToWishlist: (job: JobData) => void;
  removeFromWishlist: (job: JobData) => void;
  isInWishList: (jobId: number) => boolean;
};

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishList: () => false,
});

export default WishlistContext;
