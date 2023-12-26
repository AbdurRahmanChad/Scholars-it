import React from "react";
import BannerHome from "./BannerHome";
import TrandingCourses from "./TrandingCourses";
import SuccessfullStory from "./SuccessfullStory";
import StudentVisitors from "./StudentVisitors";
import SelebratySeminars from "./SelebratySeminars";

const Home = () => {
  return (
    <>
      <BannerHome />
      <TrandingCourses />
      <SuccessfullStory />
      <StudentVisitors />
      <SelebratySeminars />
    </>
  );
};

export default Home;
