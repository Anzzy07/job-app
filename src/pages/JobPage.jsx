import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFavoritesJobs } from "../context/FavoriteJobs";
import Spinner from "../component/LoadingScreen";

export const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesJobs();
  const isJobFavorite = isFavorite(id);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const validateForm = () => {
    const errors = {};
    if (!form.fullName) errors.fullName = "Full Name is required.";
    if (!form.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email format is invalid.";
    }
    if (!form.coverLetter) errors.coverLetter = "Cover Letter is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", form);
      toast.success("Your application has been submitted successfully!");
      setForm({
        fullName: "",
        email: "",
        resume: null,
        coverLetter: "",
      });
    } else {
      toast.error("Please fill required fields.");
      setFormErrors(errors);
    }
  };

  const toggleFavorite = () => {
    if (isJobFavorite) {
      removeFavorite(id);
      toast.info("Removed from favorites.");
    } else {
      addFavorite(job);
      toast.success("Added to favorites!");
    }
  };

  if (loading) return <Spinner />;

  if (!job)
    return <div className="text-center text-red-500">Job not found.</div>;

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10">
        <div className="container m-auto max-w-3xl bg-white p-6 shadow-md rounded">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-600">
              {job.title}
            </h2>
            <button
              onClick={toggleFavorite}
              className="text-red-500 hover:text-red-600"
            >
              {isJobFavorite ? (
                <FaHeart className="text-xl" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
            </button>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Company:</span> {job.company.name}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Salary:</span> {job.salary}
          </p>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2 text-gray-600">
              Job Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-10">
        <div className="container m-auto max-w-3xl bg-white p-6 shadow-md rounded">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Apply for this Job
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm">{formErrors.fullName}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Write your cover letter"
                rows="4"
              ></textarea>
              {formErrors.coverLetter && (
                <p className="text-red-500 text-sm">{formErrors.coverLetter}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
