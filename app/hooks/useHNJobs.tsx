import useSWR from "swr";
export default function useHNJobs(jobIds: number[]) {
  const fetcher = function (jobIds: number[]) {
    const requests = jobIds.map((jobId) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
        (res) => res.json()
      )
    );
    return Promise.all(requests);
  };
  const { data: jobsData, error, isLoading } = useSWR(jobIds, fetcher);

  return [jobsData, error, isLoading];
}
