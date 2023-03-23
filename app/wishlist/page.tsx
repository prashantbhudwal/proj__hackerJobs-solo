"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
export default function Wishlist() {
  const {
    wishlist: jobData,
    addToWishlist,
    removeFromWishlist,
    isInWishList,
  } = useContext(WishlistContext);

  return (
    <Stack>
      {jobData.map((jobData: JobData) => (
        <Job
          key={jobData.id}
          jobData={jobData}
          clickHandler={
            isInWishList(jobData.id) ? removeFromWishlist : addToWishlist
          }
          inWishlist={isInWishList}
        />
      ))}
    </Stack>
  );
}
