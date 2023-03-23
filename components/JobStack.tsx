import Job from "@/components/Job";
const jobData = {
  by: "aisrael",
  id: 35154599,
  score: 1,
  time: 1678813241,
  title: "PropelAuth (YC W22) Is Hiring Engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/propelauth/jobs",
};

export default function JobStack({ allJobs }: { allJobs: number[] }) {
  return (
    <div className="flex flex-col gap-4 max-w-xl">
      {allJobs.map((jobId: number) => (
        <Job jobId={jobId} state="added" key={jobId} />
      ))}
    </div>
  );
}
