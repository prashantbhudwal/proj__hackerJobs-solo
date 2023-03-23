"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import useAllHNJobs from "./hooks/useHNJobsIds";
import useHNJobs from "./hooks/useHNJobs";

export default function Home() {
  const [allJobIds, errorAllJobs, isLoadingAllJobs] = useAllHNJobs();
  const [jobsData, errorJobsData, isLoadingJobsData] = useHNJobs(allJobIds);

  if (errorAllJobs || errorJobsData) return <h1>Error</h1>;
  if (isLoadingAllJobs || isLoadingJobsData) return <h1>Loading...</h1>;

  return (
    <Stack>
      {jobsData.map((jobData: JobData) => (
        <Job key={jobData.id} jobData={jobData} />
      ))}
    </Stack>
  );
}
