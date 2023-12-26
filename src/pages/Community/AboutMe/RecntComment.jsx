import React from "react";
import GridImg1 from "../../../assets/community_img/tour1.jpg";
import GridImg2 from "../../../assets/community_img/tour2.jpg";
import GridImg3 from "../../../assets/community_img/tour3.jpg";

const RecntComment = () => {
  return (
    <div className="mt-6">
      <div className="flex-[1] min-h-full bg-transparent">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between py-6">
            <div className="flex gap-2">
              <h1 className="text-xl font-medium group relative inline-block cursor-pointer">
                Recent
                <span className="absolute inset-x-0 -bottom-0 h-[2.5px] bg-green-600 transform scale-x-0 origin-left transition-transform group-first-of-type:scale-x-100"></span>
              </h1>
              <p className="text-xl font-medium">Comments</p>
            </div>
            <div>
              <p className="text-2xl rotate-90">...</p>
            </div>
          </div>
          {/*============================================================*/}
          {/*============== image 01 ===================*/}
          <div className="flex items-center gap-6 py-3">
            <div>
              <img
                className="w-32 h-24 object-cover rounded-lg"
                src={GridImg1}
                alt="GridImg1"
              />
            </div>
            <div className="font-medium text-gray-600">
              <p className="text-sm">July 24 2023</p>
              <p className="text-tMd text-black">Cos'x Bazar Toure</p>
            </div>
          </div>
          {/*============== image 02 ===================*/}
          <div className="flex items-center gap-6 py-2">
            <div>
              <img
                className="w-32 h-24 object-cover rounded-lg"
                src={GridImg2}
                alt="GridImg1"
              />
            </div>
            <div className="font-medium text-gray-600">
              <p className="text-sm">July 24 2023</p>
              <p className="text-tMd text-black">Cos'x Bazar Toure</p>
            </div>
          </div>
          {/*============== image 03 ===================*/}
          <div className="flex items-center gap-6 py-2">
            <div>
              <img
                className="w-32 h-24 object-cover rounded-lg"
                src={GridImg3}
                alt="GridImg1"
              />
            </div>
            <div className="font-medium text-gray-600">
              <p className="text-sm">July 24 2023</p>
              <p className="text-tMd text-black">Cos'x Bazar Toure</p>
            </div>
          </div>
          {/*============== image 04 ===================*/}
          <div className="flex items-center gap-6 py-2">
            <div>
              <img
                className="w-32 h-24 object-cover rounded-lg"
                src={GridImg1}
                alt="GridImg1"
              />
            </div>
            <div className="text-sm font-medium text-gray-600">
              <p className="text-sm">July 24 2023</p>
              <p className="text-tMd text-black">Cos'x Bazar Toure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecntComment;
