import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  const navActive = ({ isActive }) =>
    isActive
      ? "hover:text-red-600 text-red-600"
      : "text-2xl text-red-400 hover:text-red-600";

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="w-full flex h-20 items-center px-4">
        <NavLink to="/">
          <img src={Logo} alt="Job Listing" style={{ width: "200px" }} />
        </NavLink>
        <div className="ml-auto text-2xl text-red-400 flex space-x-4">
          <NavLink to="/" className={navActive}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={navActive}>
            Jobs
          </NavLink>
          <NavLink to="/jobs-saved" className={navActive}>
            Favourites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
