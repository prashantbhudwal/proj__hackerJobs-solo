import useSWR from "swr";
export default function useAllHNJobs() {
  const fetcher = function () {
    return fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`)
      .then((res) => res.json())
      .then((data) => data);
  };
  const {
    data: allJobs,
    error,
    isLoading,
  } = useSWR(`https://hacker-news.firebaseio.com/v0/jobstories.json`, fetcher);
  return [allJobs, error, isLoading];
}
