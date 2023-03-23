"use client";
import useWishlist from "../hooks/useWishlist";

import WishlistContext, {
  WishlistContextType,
} from "@/app/context/WishlistContext";

export default function WishlistContextProvider({
  children,
}: {
  children: any;
}) {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishList } =
    useWishlist();

  const wishlistContextValue: WishlistContextType = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishList,
  };

  return (
    <WishlistContext.Provider value={wishlistContextValue}>
      {children}
    </WishlistContext.Provider>
  );
}
