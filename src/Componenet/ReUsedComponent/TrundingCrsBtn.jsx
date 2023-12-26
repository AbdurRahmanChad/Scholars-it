import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  FaArrowUpRightFromSquare,
  FaRegShareFromSquare,
} from "react-icons/fa6";

export default function TrundingCrsBtn({ course }) {
  const { image, title, reviews, price } = course;
  return (
    <div className="">
      {/*==================Image============================*/}
      <div className="">
        <img
          className="w-full  object-cover rounded-t-xl"
          src={image}
          alt={title}
        />
      </div>
      {/*====================Text=====================================*/}
      <div className="shadow-xl rounded-xl">
        <div className="mx-4 py-4 ">
          <div className="flex justify-between items-center">
            <h1 className="text-md sm:text-md md:text-sm lg:text-lg font-medium">
              {title}
            </h1>
            <FaArrowUpRightFromSquare className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:3.5 md:h-3.5 lg:w-4 lg:h-4 text-black" />
          </div>
          {/*====================Star Start ==========================*/}
          <div className="flex justify-between pt-2 pb-2 lg:pb-6">
            <div className="flex justify-center items-center gap-6">
              <div className="flex text-green-600 text-xs sm:text-xs md:text-xs lg:text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div>
                <h1 className="text-sm sm:text-sm md:text-xs">{reviews}</h1>
              </div>
            </div>
            <div className="">
              <FaRegShareFromSquare className="w-5 sm:w-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-black" />
            </div>
          </div>
          {/*==================== Star End==========================*/}
          <div className="flex justify-between items-center gap-1">
            <p className="text-center text-sm sm:text-sm md:text-xs lg:text-xs md:text-mt-1 lg:mt-1 text-gray-500">
              {price}
            </p>
            <button className="scholarsBtn">Get Scholarship</button>
          </div>
        </div>
      </div>
    </div>
  );
}
