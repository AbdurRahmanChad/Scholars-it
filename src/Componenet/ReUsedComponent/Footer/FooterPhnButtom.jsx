import React from "react";
import { NavLink } from "react-router-dom";
import { FaHouse, FaGraduationCap, FaUserGroup } from "react-icons/fa6";
import { FaUser, FaRegCalendarCheck } from "react-icons/fa";

const FooterPhnButtom = () => {
  return (
    <div className="">
      <div
        className="w-full h-[60px] bg-white max-w-full mx-auto
     text-black px-6 sm:px-10 md:px-24 fixed bottom-0 lg:hidden"
      >
        <div className="flex justify-between items-center mt-4">
          <div className="text-[8px] sm:text-xs">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-black"
              }
            >
              <FaHouse className=" mx-auto" />
              <p className="pt-1">Home</p>
            </NavLink>
          </div>
          <div className="text-[8px] sm:text-xs">
            <NavLink
              to="/Courses"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-black"
              }
            >
              <FaGraduationCap className=" mx-auto" />
              <p className=" pt-1">Course</p>
            </NavLink>
          </div>
          <div className="text-[8px] sm:text-xs">
            <NavLink
              to="/Community"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-black"
              }
            >
              <FaUserGroup className="mx-auto" />
              <p className="pt-1">Community</p>
            </NavLink>
          </div>
          <div className="text-[8px] sm:text-xs">
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-black"
              }
            >
              <FaRegCalendarCheck className="mx-auto" />
              <p className="pt-1">Events</p>
            </NavLink>
          </div>
          <div className="text-[8px] sm:text-xs">
            <NavLink
              to="/Admission"
              className={({ isActive }) =>
                isActive ? "text-green-600" : "text-black"
              }
            >
              <FaUser className="mx-auto" />
              <p className="pt-1">Profile</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPhnButtom;
