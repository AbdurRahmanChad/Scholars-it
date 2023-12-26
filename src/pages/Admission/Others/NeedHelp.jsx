import React from "react";
import { FaHeadset } from "react-icons/fa";

const NeedHelp = () => {
  return (
    <div className="mt-6">
      <div className="bg-white px-6 py-6 rounded-b-lg shadow-xl">
        {/*=====================================================================*/}
        <div className="flex justify-between">
          <div className="text-sm sm:text-sm md:text-xl lg:text-xl flex gap-2 font-medium">
            <h1 className="group relative inline-block cursor-pointer">
              Need
              <span
                className="absolute inset-x-0 -bottom-2 h-0.5 bg-green-600 transform scale-x-0 origin-left
               transition-transform group-only-of-type:scale-x-100"
              ></span>
            </h1>
            <p>Help?</p>
          </div>
          <div>
            <FaHeadset className="text-xl sm:text-xl md:text-3xl lg:text-3xl text-green-500" />
          </div>
        </div>
        {/*=====================================================================*/}
        <div className="">
          <div className="py-5 sm:py-5 md:py-6 lg:py-5 text-sm sm:text-sm md:text-lg lg:text-lg font-medium text-gray-500">
            <h1 className="">
              24
              <span className="">/</span>7 Hours Support
            </h1>
          </div>
          <div className="text-xs sm:text-xs md:text-sm lg:text-sm">
            <div className="flex gap-6 sm:gap-6 md:gap-14 lg:gap-14">
              <p>Call Us:</p>
              <p>+88 01732-XXXXXX</p>
            </div>
            <div className="flex gap-9 sm:gap-9 md:gap-20 lg:gap-16 pt-2">
              <p>Email:</p>
              <p>hello@scholars.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="px-10 sm:px-10 md:px-14 lg:px-14 py-1 sm:py-1 md:py-2 lg:py-2 border-2 rounded-lg bg-green-600
           mt-6 text-sm sm:text-sm md:text-tMd lg:text-tMd text-white"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
