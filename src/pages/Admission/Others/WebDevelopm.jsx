import React from "react";
import ImageWeb from "../../../assets/home_img/photo-1.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const WebDevelopm = () => {
  return (
    <div>
      <div>
        <img
          className="object-cover rounded-t-lg"
          src={ImageWeb}
          alt="ImageWeb"
        />
      </div>
      <div className="bg-white px-6 py-6 rounded-b-lg shadow-xl">
        <div>
          <h1 className="text-md sm:text-md md:text-xl lg:text-xl font-medium">
            Web Development
          </h1>
          <div className="flex gap-6">
            <div className="flex justify-center items-center text-green-600 text-xs sm:text-xs md:text-sm lg:text-xs ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div>
              <p className="py-2 text-xs sm:text-xs md:text-sm lg:text-xs text-gray-500">
                7k Reviews
              </p>
            </div>
          </div>
          <p className="lg:py-2 text-xs sm:text-xs md:text-sm lg:text-sm text-gray-500">
            fee 50,000 Tk Only!
          </p>
        </div>
        <div className="">
          <button
            className="px-6 py-1 md:py-1.5 lg:py-1.5 border-2 rounded-lg border-green-400 
          mt-4 md:mt-6 lg:mt-6 text-sm sm:text-sm md:text-tMd lg:text-tMd text-green-500"
          >
            Total Selase 527
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopm;
