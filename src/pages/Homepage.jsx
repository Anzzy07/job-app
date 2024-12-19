import React from "react";
import { Hero } from "../component/Hero";
import { HomeCard } from "../component/HomeCard";
import { JobList } from "../component/JobList";
import { ViewAllJobs } from "../component/ViewAllJob";
import { Footer } from "../component/Footer";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobList isHomePage={true} />
      <ViewAllJobs />
      <Footer />
    </>
  );
};
