import Job from "@/components/Job";
import JobStack from "@/components/JobStack";
const jobData = {
  by: "aisrael",
  id: 35154599,
  score: 1,
  time: 1678813241,
  title: "PropelAuth (YC W22) Is Hiring Engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/propelauth/jobs",
};

export default function HackerJobs({ allJobs }) {
  return (
    <main>
      <JobStack>
        {allJobs.map((jobId: number) => (
          <Job jobId={jobId} state="added" key={jobId} />
        ))}
      </JobStack>
    </main>
  );
}
