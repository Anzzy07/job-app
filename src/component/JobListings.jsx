import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

export const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = job.description;

  if (!showFullDesc) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-500">{job.title}</h3>
          <div className="text-gray-600 my-2">{job.company.name}</div>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDesc((prev) => !prev)}
          className="text-gray-500 mb-5 hover:text-gray-600"
        >
          {showFullDesc ? "Less" : "More"}
        </button>

        <h3 className="text-blue-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline rext-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Apply Here
          </Link>
        </div>
      </div>
    </div>
  );
};
