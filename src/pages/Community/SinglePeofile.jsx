import React from "react";
import ProfileImg from "../../assets/community_img/profile.jpg";
import GridImg from "../../assets/community_img/tour2.jpg";
import {
  BsGlobeAsiaAustralia,
  BsHeart,
  BsChat,
  BsShareFill,
} from "react-icons/bs";
import { FaHeart, FaRegClock } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";

export default function SinglePeofile({ is_image }) {
  return (
    <div className="w-full mt-8">
      <div className="container mx-auto">
        <div className="min-h-full bg-white rounded-lg">
          {/*================== Profile ===================================*/}
          <div className="flex justify-between items-center">
            <div className="flex gap-6 px-5 pt-6">
              <img
                className="w-12 h-12 object-cover rounded-full border-2 border-green-500"
                src={ProfileImg}
                alt="ProfileImg"
              />
              <div className="pt-4 relative mb-8 sm:mb-0">
                <div className="-mt-4">
                  <h1 className="text-tMd">Mr. Jhon</h1>
                </div>
                <div
                  className="absolute min-w-[280px] top-6 -left-0 sm:static flex justify-start sm:justify-start items-start 
                sm:items-start gap-1.5 text-slate-500 sm:gap-1,.5 md:gap-5 lg:gap-5 pt-2 text-sm sm:text-sm"
                >
                  <div className="flex justify-center items-center gap-2">
                    <BsGlobeAsiaAustralia />
                    <p>Public</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <FaRegClock />
                    <p>5 Minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-6 -mt-10">
              <p className="text-xl font-medium">...</p>
            </div>
          </div>
          {/*================== text+Image Start ===================================*/}
          <div>
            <p className="px-6 text-sm sm:text-sm md:text-tLg lg:text-tLg py-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              velit facere consectetur sed impedit quisquam odio.
            </p>
            {is_image ? (
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={GridImg}
                  alt="ProfileImg2"
                />
              </div>
            ) : (
              <p className="px-6 text-sm sm:text-sm md:text-tLg lg:text-tLg py-10 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                nostrum cupiditate sed quidem voluptatum tempora ipsum porro
                eligendi eum ullam, consequatur beatae facilis, quod temporibus.
              </p>
            )}
            {/*=======================================================================*/}
            <div className="flex justify-between px-6 py-2 sm:py-2 md:py-6 lg:py-6 text-xs sm:text-xs md:text-sm lg:text-sm">
              <div className="flex justify-center items-center gap-1">
                <HiThumbUp className="text-green-600" />
                <FaHeart className="text-green-600" />
                <p>27</p>
              </div>
              <div className="flex gap-6">
                <p>10 Comments</p>
                <p>5 Share</p>
              </div>
            </div>
            <hr className="" />
            {/*=======================================================================*/}
            <div className="flex justify-between gap-10 px-6 py-2 sm:py-2 md:py-6 lg:py-6">
              <div className="flex gap-10">
                <div className="flex justify-center items-center gap-2 text-sm">
                  <BsHeart className="" />
                  <p className="">React</p>
                </div>
                <div className="flex justify-center items-center gap-2 text-xs sm:text-xs md:text-sm lg:text-sm">
                  <BsChat className="" />
                  <p className="">Comment</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 text-xs sm:text-xs md:text-sm lg:text-sm">
                <BsShareFill className="" />
                <p className="">Share</p>
              </div>
            </div>
          </div>
          {/*================== text+Image End =====================================*/}
        </div>
      </div>
    </div>
  );
}
