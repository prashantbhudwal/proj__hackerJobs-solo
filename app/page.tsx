import Job from "../components/Job";
import JobStack from "../components/JobStack";

export default function Home() {
  const jobData = {
    by: "aisrael",
    id: 35154599,
    score: 1,
    time: 1678813241,
    title: "PropelAuth (YC W22) Is Hiring Engineers",
    type: "job",
    url: "https://www.ycombinator.com/companies/propelauth/jobs",
  };
  return (
    <main>
      <JobStack>
        <Job jobData={jobData} state="added" />
        <Job jobData={jobData} state="added" />
        <Job jobData={jobData} state="added" />
      </JobStack>
    </main>
  );
}
