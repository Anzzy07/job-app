import React from "react";
import { useFavoritesJobs } from "../context/FavoriteJobs";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export const SavedJobs = () => {
  const { favorites } = useFavoritesJobs();

  if (favorites.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-100 h-screen flex flex-col items-center justify-center">
        <FaHeart className="text-red-500 text-9xl mb-4" />
        <p className="text-xl text-gray-600 mb-4">
          You haven't saved any jobs yet!
        </p>
        <Link
          to="/jobs"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Browse Jobs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 px-4 py-10 min-h-screen">
      <div className="container m-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-700 text-center">
          Your Favorite Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {favorites.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center hover:shadow-xl transition-shadow"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-700">
                  {job.title}
                </h3>
                <p className="text-gray-500">{job.company.name}</p>
              </div>
              <Link
                to={`/jobs/${job.id}`}
                className="text-blue-500 hover:text-blue-600 text-sm font-semibold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
