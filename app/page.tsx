"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import useAllHNJobs from "./hooks/useHNJobsIds";
import useHNJobs from "./hooks/useHNJobs";


import { useContext } from "react";
import WishlistContext from "./context/WishlistContext";

export default function Home() {
  const { addToWishlist, removeFromWishlist, isInWishList } =
    useContext(WishlistContext);

   const [allJobIds, errorAllJobs, isLoadingAllJobs] = useAllHNJobs();
   const [jobsData, errorJobsData, isLoadingJobsData] = useHNJobs(allJobIds);

   if (errorAllJobs || errorJobsData) return <h1>Error</h1>;
   if (isLoadingAllJobs || isLoadingJobsData) return <h1>Loading...</h1>;


  return (
    <Stack>
      {jobsData.map((jobData: JobData) => (
        <Job
          jobId={jobData.id}
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
