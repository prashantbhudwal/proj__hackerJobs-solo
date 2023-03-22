"use client";
import useSWR from "swr";
import HackerJobs from "./jobs/page";

export default function Home() {
  //  Used SWR because of some issue with native fetch in server components
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
  if (error)  return <h1>Error</h1>;
  if (isLoading)  return <h1>Loading</h1>;

  return <HackerJobs allJobs={allJobs} />;
}
