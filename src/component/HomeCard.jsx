import { FaBriefcase, FaRocket } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl mx-auto p-6 rounded-lg">
      <div className="bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow flex items-center">
        <FaBriefcase className="w-12 h-12 text-red-500 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            Find Your Dream Job
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Your Career Starts Here
          </h3>
          <p className="text-gray-700 mb-4">
            Explore job opportunities to your skills and preferences. Start your
            professional journey today!
          </p>
          <Link to="/jobs">
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-transform transform hover:scale-105">
              Browse Jobs
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow flex items-center">
        <FaRocket className="w-12 h-12 text-blue-500 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-2">
            Save Jobs to Your Wishlist
          </h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Your Dream Career Awaits
          </h3>
          <p className="text-gray-700 mb-4">
            Don't miss out on opportunities! Bookmark your favorite jobs to
            access them anytime and apply before it's too late.
          </p>
          <Link to="/jobs-saved">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105">
              Favourites Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
