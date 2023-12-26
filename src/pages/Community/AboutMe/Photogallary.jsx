import React from "react";
import GridImg1 from "../../../assets/community_img/tour1.jpg";
import GridImg2 from "../../../assets/community_img/tour2.jpg";
import GridImg3 from "../../../assets/community_img/tour3.jpg";

const Photogallary = () => {
  return (
    <div className="mt-6">
      <div className="flex-[1] min-w-full bg-transparent">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between py-6">
            <div className="flex gap-2">
              <h1 className="text-xl font-medium group relative inline-block cursor-pointer">
                Photos
                <span className="absolute inset-x-0 -bottom-0 h-[2.5px] bg-green-600 transform scale-x-0 origin-left transition-transform group-first-of-type:scale-x-100"></span>
              </h1>
              <p className="text-xl font-medium">Gallery</p>
            </div>
            <div>
              <p className="text-2xl rotate-90">...</p>
            </div>
          </div>
          {/*==================================================================*/}
          <div className="grid grid-cols-3 gap-6">
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg1}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg2}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg3}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg1}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg2}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg3}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg1}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg2}
              alt="GridImg1"
            />
            <img
              className="w-44 h-32 object-cover rounded-lg"
              src={GridImg3}
              alt="GridImg1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogallary;
