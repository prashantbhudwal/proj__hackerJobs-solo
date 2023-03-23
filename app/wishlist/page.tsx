"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";
export default function Wishlist() {
  const { wishlist: jobsData } = useContext(WishlistContext);

  return (
    <Stack>
      {jobsData.map((jobData: JobData) => (
        <Job key={jobData.id} jobData={jobData} />
      ))}
    </Stack>
  );
}
