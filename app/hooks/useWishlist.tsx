"use client";
import { useState } from "react";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState<JobData[]>([]);
  const isInWishList = function (jobId: number) {
    return wishlist.some((savedJob: JobData) => savedJob.id === jobId);
  };

  const addToWishlist = function (job: JobData) {
    console.log("clicked");
    const isInWishlist = wishlist.some(
      (savedJob: JobData) => savedJob.id === job.id
    );
    if (!isInWishlist) {
      setWishlist((prevWishlist) => [...prevWishlist, job]);
    }
  };

  const removeFromWishlist = function (job: JobData) {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((savedJob) => savedJob.id !== job.id)
    );
  };

  return { wishlist, addToWishlist, removeFromWishlist, isInWishList };
}
