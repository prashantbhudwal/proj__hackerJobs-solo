export default function Job({
  state,
  jobData,
}: {
  state: string;
  jobData: any;
}) {
  const { id, url: jobUrl, title, time: date } = jobData;
  return (
    <section className="flex flex-col gap-3 shadow-lg px-6 py-5 rounded-lg">
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
  );
}

// export default function JobStorybook() {
//   const states = ["added", "removed"];

//   return (
//     <div>
//       {states.map((state) => (
//         <Job state={state} key={state} />
//       ))}
//     </div>
//   );
// }
