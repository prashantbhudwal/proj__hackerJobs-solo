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
    <div className="border border-purple-600 my-4 p-4 w-8/12">
      <section className="flex flex-col gap-2 shadow-lg px-6 py-5 rounded-lg">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>
          Posted on{" "}
          {new Date(date * 1000).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <div className="flex items-baseline justify-start gap-3">
          <a
            href={jobUrl}
            className=" bg-red-600 text-white rounded-sm px-2 py-2 w-32 text-center"
          >
            Apply Now
          </a>
          <button
            className={`bg-purple-600 text-white rounded-sm px-2 py-2 w-32 ${
              state === "added" ? "bg-gray-600" : "bg-purple-600"
            }`}
          >
            {state === "added" ? "Saved" : "Save for Later"}
          </button>
        </div>
      </section>
    </div>
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
