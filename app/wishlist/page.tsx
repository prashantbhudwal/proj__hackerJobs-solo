"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
export default function Wishlist() {
  
const { wishlist, addToWishlist, removeFromWishlist, isInWishList } =
  useContext(WishlistContext);


  return (
    <Stack>
      {/* {wishlist.map((jobData: JobData) => (
        <Job
          jobId={jobData.id}
          key={jobData.id}
          jobFetcher={useHNJob}
          clickHandler={
            isInWishList(jobData.id) ? removeFromWishlist : addToWishlist
          }
          inWishlist={isInWishList}
        />
      ))} */}
    </Stack>
  );
}
