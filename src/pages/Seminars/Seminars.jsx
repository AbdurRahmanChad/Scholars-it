import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import SeminarsFrom from "../Seminars/SeminarsFrom";
import Navbar from "../../Componenet/Home/Navbar";

const Seminars = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <div className="max-w-full min-h-full about-Bg">
          <div className="container mx-auto overflow-hidden px-4 lg:px-0">
            {/*=================== Text Start ==================*/}
            <div className="my-10 sm:my-10 md:my-20 lg:my-32 mx-4 sm:mx-6 md:mx-28 lg:mx-28">
              <div className="text-white">
                <h1 className="text-2xl  md:text-4xl lg:text-4xl font-semibold">
                  Join Our Free Seminar
                </h1>
                <p className="text-xs sm:text-xs md:text-lg lg:text-lg pt-3 sm:pt-3 md:pt-6 lg:pt-6">
                  Grow with Skill and Bulid your career with scholar's it.
                </p>
              </div>
              <div className="mt-8 lg:mt-24 text-white flex gap-12 items-center">
                <div>
                  <p className="text-xs md:text-xl lg:text-xl px-8 py-2 bg-slate-50 text-green-600 rounded-lg ">
                    see courses
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <FaCalendarCheck className="text-sm sm:text-sm md:text-xl lg:text-xl " />
                  <p className="text-sm sm:text-sm md:text-xl lg:text-xl">
                    since 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*================================================================*/}
        </div>
      </section>
      <SeminarsFrom />
    </>
  );
};

export default Seminars;
