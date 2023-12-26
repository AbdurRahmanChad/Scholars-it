import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const whenAndWhere = [
  { title: "Class: ", text: "Totle 24 classes" },
  { title: "Time: ", text: "Morning 10 Am to 12 PM" },
  { title: "Schedule: ", text: "Saterday, Monday & Wednesday" },
  { title: "Instractor: ", text: "Md. Abdul Barek" },
  { title: "Career: ", text: "Sr. Software Engineer!" },
];
export default function () {
  return (
    <div className="mt-6">
      <div className="bg-white px-6 py-6 rounded-b-lg shadow-xl">
        {/*=====================================================================*/}
        <div className="flex justify-between">
          <div className="text-sm sm:text-sm md:text-xl lg:text-xl flex gap-2">
            <h1 className="group relative inline-block cursor-pointer">
              When
              <span
                className="absolute inset-x-0 -bottom-2 h-0.5 bg-green-600 transform scale-x-0 origin-left
                                 transition-transform group-only-of-type:scale-x-100"
              ></span>
            </h1>
            <p>And Where</p>
          </div>
          <div>
            <FaCalendarDays className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-green-600 " />
          </div>
        </div>
        {/*=====================================================================*/}
        <div className="py-6 text-gray-500">
          <h1 className="text-sm sm:text-md md:text-tLg lg:text-tLg">
            Scholar's It Lab
          </h1>
          <p className="py-2 sm:py-2 md:py-3 lg:py-4 text-xs sm:text-xs md:text-sm lg:text-sm">
            Feroza Tower, Iift-8, DIT Road, Malibag Dhaka
          </p>
        </div>
        <div className="text-xs sm:text-xs md:text-sm lg:text-sm">
          {whenAndWhere.map((item, index) => (
            <div
              className="flex gap-0 sm:gap-0 md:gap-16 lg:gap-20 items-center justify-between w-full text-gray-500"
              key={index}
            >
              <p className="text-start w-4/12 md:w-1/5 py-1">{item.title}</p>
              <p className="text-start w-8/12 md:w-4/6">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="py-0 sm:py-0 md:py-6lg:py-6">
          <button
            className="px-10 py-1 border-2 rounded-lg border-green-500
           mt-6 text-sm sm:text-sm md:text-tMd lg:text-tMd text-green-500"
          >
            Offline
          </button>
        </div>
      </div>
    </div>
  );
}
