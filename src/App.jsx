import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Homepage } from "./pages/Homepage";
import { JobPage } from "./pages/JobPage";
import { PageNotFound } from "./pages/PageNotFound";
import { JobsPages } from "./pages/JobsPages";
import { SavedJobs } from "./pages/SavedJobs";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<JobsPages />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="/jobs-saved" element={<SavedJobs />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
