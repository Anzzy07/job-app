import { useEffect, useState } from "react";
import { JobListing } from "./JobListings";
import Spinner from "./LoadingScreen";

export const JobList = ({ isHomePage = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const URL = isHomePage ? "/api/jobs?_limit=6" : "/api/jobs";
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Fetched data:", data);
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-gray-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          {isHomePage ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
