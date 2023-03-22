import JobStack from "@/components/JobStack";
import Job from "@/components/Job";
export default function WishlistPage() {
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
    <>
      Wishlist
      <JobStack>
        <Job jobData={jobData} state="added" />
        <Job jobData={jobData} state="added" />
        <Job jobData={jobData} state="added" />
      </JobStack>
    </>
  );
}
