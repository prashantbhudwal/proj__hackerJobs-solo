"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import useAllHNJobs from "./hooks/useAllHNJobs";
import useHNJob from "./hooks/useHNJob";
import { useContext } from "react";
import WishlistContext from "./context/WishlistContext";

export default function Home() {
  const { addToWishlist, removeFromWishlist, isInWishList } =
    useContext(WishlistContext);

  const [allJobs, error, isLoading] = useAllHNJobs();
  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1></h1>;

  return (
    <Stack>
      {allJobs.map((jobId: number) => (
        <Job
          jobId={jobId}
          key={jobId}
          jobFetcher={useHNJob}
          clickHandler={
            isInWishList(jobId) ? removeFromWishlist : addToWishlist
          }
          inWishlist={isInWishList}
        />
      ))}
    </Stack>
  );
}
