import React from "react";
import AdmissionFrom from "./AdmissionFrom";
import { FaCalendarCheck } from "react-icons/fa";
import JoinSeminarBtn from "../../Componenet/ReUsedComponent/JoinSeminarBtn";
import Navbar from "../../Componenet/Home/Navbar";

const Admission = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <JoinSeminarBtn />
        <div className="max-w-full min-h-full about-Bg">
          <div className="container mx-auto overflow-hidden">
            {/*=================== Text Start ==================*/}
            <div className="my-10 sm:my-10 md:my-20 lg:my-32 mx-10 sm:mx-4 md:mx-28 lg:mx-28">
              <div className="text-white">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold">
                  Save Your Money
                </h1>
                <p className="text-xs sm:text-xs md:text-lg lg:text-lg pt-2 sm:pt-2 md:pt-6 lg:pt-6">
                  Grow with Skills and build your career with Scholar's IT.
                </p>
              </div>
              <div className="mt-6 sm:mt-6 md:mt-20 lg:mt-10 text-white flex gap-12 items-center">
                <div>
                  <p
                    className="px-6 py-2  bg-slate-50
                   text-green-500 rounded-lg text-sm md:text-tLg lg:text-tLg font-medium"
                  >
                    see courses
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <FaCalendarCheck className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4" />
                  <p className="text-md lg:text-tLg">since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdmissionFrom />
    </>
  );
};

export default Admission;
