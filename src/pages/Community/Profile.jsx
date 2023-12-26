import React from "react";
import SinglePeofile from "./SinglePeofile";
import AboutMe from "../Community/AboutMe/AboutMe";
import Photogallary from "../Community/AboutMe/Photogallary";
import RecntComment from "../Community/AboutMe/RecntComment";
import StatusText from "./StatusText";
import TimlineProfile from "./TimlineProfile";

const Profile = () => {
  return (
    <section className="bg-bgHome py-12">
      {/*=========================== TimeLine Profile =====================================*/}
      <TimlineProfile />
      {/*==============================TimeLine Profile End=================================*/}
      <div className="py-10">
        <div className="container mx-auto">
          <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28">
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10">
              <div className="flex-[2] min-h-full rounded-lg">
                {/*============================== Part 01 Start ============================*/}
                <StatusText />
                {/*========================= Part 01 End ===================================*/}
                {/*========================= Part 02 Start profile + image =================*/}
                <SinglePeofile is_image={true} />
                {/*========================= Part 02 End ===================================*/}
                {/*========================= Part 03 Start =================================*/}
                <SinglePeofile is_image={false} />
                {/*========================= Part 03 End ===================================*/}
                {/*========================= Part 04 Start =================================*/}
                <SinglePeofile is_image={true} />
                {/*========================== Part 04 End===================================*/}
              </div>
              {/*=========================Right Side Part Start ============================*/}
              <div className="flex-[1] min-h-full bg-transparent">
                {/*==============================Part 01 start==============================*/}
                <AboutMe />
                {/*=========================Right Side Part 02 Start========================*/}
                <Photogallary />
                {/*========================= Right Side Part 03 Start ======================*/}
                <RecntComment />
                {/*==========================Right Side Part 03 End ========================*/}
              </div>
              {/*=========================Right Side Part End ==============================*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
