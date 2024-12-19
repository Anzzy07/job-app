export const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-500 py-8 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">Your Dream Jobs</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-red-500 transition-colors">
            Home
          </a>
          <a href="/jobs" className="hover:text-red-500 transition-colors">
            Jobs
          </a>
          <a
            href="/jobs-saved"
            className="hover:text-red-500 transition-colors"
          >
            Favourites
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Job Listings. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
