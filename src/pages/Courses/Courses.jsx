import React from "react";
import TopCourses from "./TopCourses";
import AboutTeam from "../AboutUs/AboutTeam";
import TrustedCourseBtn from "./TrustedCourseBtn";
import CourseBannar from "./CourseBannar";
import CoursesSuccStory from "./CoursesSuccStory";
import Navbar from "../../Componenet/Home/Navbar";

const Courses = () => {
  return (
    <>
      <Navbar />
      <CourseBannar />
      <TrustedCourseBtn />
      <TopCourses />
      <CoursesSuccStory />
      <AboutTeam />
    </>
  );
};

export default Courses;
