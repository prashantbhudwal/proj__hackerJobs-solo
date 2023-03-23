"use client";
export default function Button({
  inWishlist,
  clickHandler,
  jobData,
}: {
  inWishlist: (jobId: number) => boolean;
  clickHandler: (job: JobData) => void;
  jobData: JobData;
}) {
  return (
    <button
      onClick={() => clickHandler(jobData)}
      className={`bg-purple-600 text-white rounded-sm px-2 py-2 w-32 ${
        inWishlist(jobData.id) ? "bg-green-600" : "bg-purple-600"
      }`}
    >
      {inWishlist(jobData.id) ? "Saved" : "Save for Later"}
    </button>
  );
}
