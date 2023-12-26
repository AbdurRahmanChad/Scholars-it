import React from "react";
import AboutText from "./AboutText";
import AboutSuccess from "./AboutSuccess";
import EventsExparts from "../Events/EventsExparts";
import { HiLocationMarker } from "react-icons/hi";
import { BsCalculator } from "react-icons/bs";
import JoinSeminarBtn from "../../Componenet/ReUsedComponent/JoinSeminarBtn";
import Mission from "./Mission";
import Navbar from "../../Componenet/Home/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <JoinSeminarBtn />
        <div className="max-w-full min-h-full about-Bg">
          <div className="container mx-auto overflow-hidden">
            {/*=================== Text Start ==================*/}
            <div className="my-10 sm:my-10 md:my-20 lg:my-32 mx-12 sm:mx-12 md:mx-28 lg:mx-28">
              <div className="text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
                  Scholars IT Community
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-lg pt-4 sm:pt-4 md:pt-6 lg:pt-6">
                  Grow with Skill and Bulid your career with scholar's it.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 md:mt-16 lg:mt-10 text-white flex gap-10">
                <div className="flex gap-2 justify-center items-center text-lg sm:text-lg md:text-xl lg:text-xl">
                  <HiLocationMarker className="text-xl lg:text-xl" />
                  <p className="">Malibag, Dhaka</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-lg sm:text-lg md:text-xl lg:text-xl">
                  <BsCalculator className="text-md sm:text-md md:text-lg lg:text-lg" />
                  <p className="">since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mission />
      <AboutText />
      <AboutSuccess />
      <EventsExparts />
    </>
  );
};

export default AboutUs;
