import React from "react";
import { HiLocationMarker, HiCheck, HiX } from "react-icons/hi";
import {
  BsCalculator,
  BsClock,
  BsCloudDrizzle,
  BsChat,
  BsHeart,
  BsShareFill,
} from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";

export default function ({ image }) {
  return (
    <div className="bg-white rounded-lg">
      {/*============= Title =====================================*/}
      <div className="flex justify-between items-center my-2 mx-4">
        <h1 className="text-sm sm:text-sm md:text-tMd lg:text-tMd font-medium">
          Word Digital Confarence
        </h1>
        <div className="flex justify-center items-center gap-4">
          <p className="text-sm lg:text-md">
            Fee: <span className="text-green-600">500Tk</span>
          </p>
          <p className="rotate-90 text-2xl">...</p>
        </div>
      </div>
      {/*============= Image =====================================*/}
      <div className="relative">
        <img className="w-full h-full object-cover" src={image} alt="GridImg" />
        <div className="absolute -mt-10 sm:-mt-10 md:-mt-14 lg:-mt-14 px-3 sm:px-3 md:px-6 lg:px-6 w-full">
          <div className="flex justify-between w-full">
            <p
              className="text-white bg-green-600 px-2 sm:px-2 md:px-4 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-2
             text-xs sm:text-xs md:text-tMd lg:text-sm rounded-lg"
            >
              Buy Ticket
            </p>
            <p
              className="text-white bg-black px-2 sm:px-2 md:px-4 lg:px-4 py-1 sm:py-1 md:py-2 lg:py-2
             text-xs sm:text-xs md:text-tMd lg:text-sm rounded-lg border-2"
            >
              1140 Seats
            </p>
          </div>
        </div>
      </div>
      {/*============= City+Time+Date+Weather ====================*/}
      <div className="flex justify-between items-center m-6 sm:m-6 md:m-6 lg:m-4 md:gap-5 lg:gap-2">
        {/*=================== City ==============================*/}
        <div className="flex justify-center gap-1">
          <div className="">
            <HiLocationMarker className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-4 lg:w-3.5 lg:h-3.5 text-green-600" />
          </div>
          <div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-xs">City</p>
            <p className="text-xs lg:text-[10px]">Dhaka</p>
          </div>
        </div>
        {/*==================== date =============================*/}
        <div className="flex justify-center gap-1.5">
          <div className="mt-0.5">
            <BsCalculator className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-4 lg:w-3 lg:h-3 text-green-500" />
          </div>
          <div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-xs">Date</p>
            <p className="text-xs lg:text-[9px]">26 Aug 2023</p>
          </div>
        </div>
        {/*==================== Time =============================*/}
        <div className="flex justify-center gap-1">
          <div className="">
            <BsClock className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-4 lg:w-5 lg:h-3.5 text-green-500" />
          </div>
          <div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-xs">Time</p>
            <p className="text-xs lg:text-[9px]">10 Am to 5 Pm</p>
          </div>
        </div>
        {/*===================== Weather ========================*/}
        <div className="hidden sm:hidden md:block lg:block">
          <div className="flex justify-evenly gap-1">
            <div className="">
              <BsCloudDrizzle className="w-9 h-6 lg:w-7 lg:h-4 text-green-500" />
            </div>
            <div>
              <p className="text-xs sm:text-xs md:text-sm lg:text-xs">
                Weather
              </p>
              <p className="text-xs lg:text-[10px]">Good</p>
            </div>
          </div>
        </div>
        {/*=======================================================*/}
      </div>
      <hr className="my-4" />
      {/*============= Going+May-Be+can't ========================*/}
      <div className="hidden sm:hidden md:block lg:block">
        <div className="flex justify-between items-center px-4 lg:px-8 gap-10">
          {/*========================= Going ==============================*/}
          <div className="flex justify-center gap-2">
            <div>
              <HiCheck className=" text-green-600" />
            </div>
            <div>
              <p className="text-sm sm:text-sm md:text-tMd lg:text-tMd">
                Going
              </p>
              <p className="text-xs">700</p>
            </div>
          </div>
          {/*========================== May Be ============================*/}
          <div className="flex justify-center gap-2">
            <div>
              <FaQuestion className=" text-green-600" />
            </div>
            <div>
              <p className="text-sm sm:text-sm md:text-tMd lg:text-xs">
                May Be
              </p>
              <p className="text-xs">312</p>
            </div>
          </div>
          {/*========================== Can't Go ==========================*/}
          <div className="flex justify-center gap-2">
            <div>
              <HiX className=" text-green-600" />
            </div>
            <div>
              <p className="text-sm sm:text-sm md:text-tMd lg:text-xs">
                Can't Go
              </p>
              <p className="text-xs">107</p>
            </div>
          </div>
        </div>
        <hr className="mx-8 my-6" />
      </div>
      {/*============= Like + Comments + Shears ==================*/}
      <div className="flex justify-between mx-8 mb-3 sm:mb-3 md:mb-6 lg:mb-6">
        <div className="flex gap-12">
          <div className="flex justify-center items-center gap-2">
            <BsHeart className="text-xs" />
            <p className="text-xs sm:text-xs md:text-tMd lg:text-xs">Like</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <BsChat className="text-xs" />
            <p className="text-xs sm:text-xs md:text-tMd lg:text-xs">
              Comments
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BsShareFill className="text-xs" />
          <p className="text-xs sm:text-xs md:text-tMd lg:text-xs">Shear 17</p>
        </div>
      </div>
    </div>
  );
}
