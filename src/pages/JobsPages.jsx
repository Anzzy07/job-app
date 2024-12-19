import React, { useEffect, useState } from "react";
import { JobListing } from "../component/JobListings";
import Spinner from "../component/LoadingScreen";

export const JobsPages = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [pages, setPages] = useState({
    jobs: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
  });

  const itemsPerPage = 6;

  const fetchJobs = async () => {
    const URL = "/api/jobs";
    try {
      setPages((prev) => ({ ...prev, loading: true }));
      const response = await fetch(URL);
      const data = await response.json();

      setAllJobs(data);

      setPages({
        jobs: data.slice(0, itemsPerPage),
        currentPage: 1,
        totalPages: Math.ceil(data.length / itemsPerPage),
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data", error);
      setPages((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handlePageChange = (newPage) => {
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setPages((prev) => ({
      ...prev,
      jobs: allJobs.slice(startIndex, endIndex),
      currentPage: newPage,
    }));
  };

  return (
    <section className="bg-gray-100 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Browse Jobs
        </h2>

        {pages.loading ? (
          <Spinner loading={pages.loading} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pages.jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => handlePageChange(pages.currentPage - 1)}
                disabled={pages.currentPage === 1}
                className={`px-4 py-2 bg-blue-500 text-white rounded ${
                  pages.currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <span className="flex items-center font-bold text-gray-700">
                Page {pages.currentPage} of {pages.totalPages}
              </span>
              <button
                onClick={() => handlePageChange(pages.currentPage + 1)}
                disabled={pages.currentPage === pages.totalPages}
                className={`px-4 py-2 bg-blue-500 text-white rounded ${
                  pages.currentPage === pages.totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
