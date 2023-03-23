"use client";
import Stack from "@/components/Stack";
import Job from "@/components/Job";
import useAllHNJobs from "./hooks/useAllHNJobs";
import useHNJob from "./hooks/useHNJob";
export default function Home() {
  const [allJobs, error, isLoading] = useAllHNJobs();
  if (error) return <h1>Error</h1>;
  if (isLoading) return <h1></h1>;

  return (
    <Stack>
      {allJobs.map((jobId: number) => (
        <Job jobId={jobId} state="added" key={jobId} jobFetcher={useHNJob} />
      ))}
    </Stack>
  );
}
