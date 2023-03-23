import useSWR from "swr";
export default function useHNJob(jobId: number) {
  const fetcher = function () {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
      .then((res) => res.json())
      .then((data) => data);
  };
  const {
    data: jobData,
    error,
    isLoading,
  } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`,
    fetcher
  );

  return [jobData, error, isLoading];
}
