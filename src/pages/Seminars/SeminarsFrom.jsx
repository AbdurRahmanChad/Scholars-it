import React from "react";
import HeadingBtn from "../../Componenet/ReUsedComponent/HeadingBtn";
import NeedHelp from "../Admission/Others/NeedHelp";

const SeminarsFrom = () => {
  return (
    <div className="">
      <div className="bg-[#F4F4F4] px-4 sm:px-4 md:px-0 lg:px-0 pt-6 ">
        <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28">
          <HeadingBtn
            title="Free Seminar Form"
            text="Please, fillup the form with right information"
          />
          <div className="container mx-auto pb-12">
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-0 sm:gap-0 md:gap-10 lg:gap-10">
              <div className="flex-[1] min-h-full rounded-lg -mt-0 md:-mt-6 lg:-mt-6">
                {/*========================= Need help Start ===============================*/}
                <NeedHelp />
                {/*========================= Need help End =================================*/}
              </div>
              {/*===========================================================================*/}
              {/*===========================================================================*/}
              {/*=========================Right Side Part Start ============================*/}
              <div className="flex-[2] min-h-full bg-transparent">
                <div>
                  {/*===========================Frist Name And Last Name ===================*/}
                  <div className="flex justify-between gap-6">
                    <input
                      type="text"
                      id="frist-name"
                      name="frist-name"
                      placeholder="Frist Name"
                      className="w-1/2 h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-4 border-gray-300 border-2"
                      required
                    />
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Last Name"
                      className="w-1/2 h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-4 border-gray-300 border-2"
                      required
                    />
                  </div>
                  {/*===========================Mobile + Email===============================*/}
                  <div className="flex justify-between gap-6 pt-4">
                    <input
                      type="number"
                      id="mobile_number"
                      name="mobile_number"
                      placeholder="Mobile Numbar"
                      className="w-1/2 h-9 text-sm sm:text-sm md:text-tmd lg:text-tMd rounded-lg px-4 border-gray-300 border-2"
                      required
                    />
                    <input
                      type="email"
                      id="email_address"
                      name="email_address"
                      placeholder="Email Address"
                      className="w-1/2 h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-4 border-gray-300 border-2"
                      required
                    />
                  </div>
                  {/*======================Topics + Gender ===================================*/}
                  <div className="flex justify-between gap-6 pt-4">
                    <select
                      type="text"
                      name="topics"
                      id="topics"
                      className="block border-2 w-1/2 h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-2.5 border-gray-300 text-gray-400"
                      required
                    >
                      <option value="0">Topics</option>
                      <option value="1">Mail</option>
                      <option value="2">Femail</option>
                      <option value="2">Femail</option>
                    </select>
                    <select
                      type="text"
                      name="gender"
                      id="gender"
                      className="block border-2 w-1/2 h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-2.5 border-gray-300 text-gray-400"
                      required
                    >
                      <option value="0">Gender</option>
                      <option value="1">Mail</option>
                      <option value="2">Femail</option>
                    </select>
                  </div>
                  {/*============================ Present Address ===========================*/}
                  <div className="pt-4 sm:pt-4 md:pt-6 lg:pt-6">
                    <input
                      type="text"
                      id="present_adress"
                      name="present_adress"
                      placeholder="Present Address"
                      className="w-full h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd rounded-lg px-4 border-gray-300 border-2"
                      required
                    />
                  </div>
                  <div className="flex gap-6 sm:gap-6 md:gap-12 lg:gap-12 py-6 text-sm sm:text-sm md:text-md lg:text-md">
                    <button className="px-4 py-1 lg:px-10 lg:py-2 bg-green-500 ring-2 rounded-lg text-white">
                      Submit
                    </button>
                    <button className="px-4 py-1 lg:px-10 lg:py-2 bg-white rounded-lg ring-2 ring-green-600">
                      Cancel
                    </button>
                  </div>
                  {/*========================================================================*/}
                </div>
                {/*=========================Right Side Course Info Start====================*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarsFrom;
