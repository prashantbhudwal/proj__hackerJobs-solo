import Image from "next/image";

export function Job({ state }: { state: string }) {
  const jobData = {
    by: "aisrael",
    id: 35154599,
    score: 1,
    time: 1678813241,
    title: "PropelAuth (YC W22) Is Hiring Engineers",
    type: "job",
    url: "https://www.ycombinator.com/companies/propelauth/jobs",
  };

  const { id, url: jobUrl, title, time: date } = jobData;

  return (
    <section className="border border-purple-600 my-4 p-4">
      <h1>{title}</h1>
      <p>Posted on: {date}</p>
      <div>
        <a href={jobUrl}>Apply Now</a>
        <button>{state === "added" ? "Saved" : "Save for Later"}</button>
      </div>
    </section>
  );
}

export default function JobStorybook() {
  const states = ["added", "removed"];

  return (
    <div>
      {states.map((state) => (
        <Job state={state} key={state} />
      ))}
    </div>
  );
}
