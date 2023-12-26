import React from "react";

const StudentsInfo = () => {
  return (
    <div>
      <div className="bg-gray-200 p-1 sm:p-1 md:p-3 lg:p-3 rounded-lg">
        <div className="flex justify-between items-center md:gap-6 lg:gap-6 font-medium px-2">
          <h1 className="text-sm sm:text-sm md:text-xl lg:text-xl">
            Students Billing Info
          </h1>
          <p className="text-xs sm:text-xs md:text-tMd lg:text-tMd bg-gray-300 p-2 rounded-full">
            01
          </p>
        </div>
      </div>
      <div>
        {/*===========================Frist Name And Last Name ===================*/}
        <div className="mt-4">
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="text"
              id="frist_name"
              name="frist_name"
              placeholder="Frist Name"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
          {/*===========================Mobile + Email===============================*/}
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="number"
              id="mobile_number"
              name="mobile_number"
              placeholder="Mobile Numbar"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd 
              rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <input
              type="email"
              id="email_address"
              name="email_address"
              placeholder="Email Address"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
          {/*======================== Date Of Birth + NID ===========================*/}
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="number"
              id="birthday"
              name="birthday"
              placeholder="Date Of Birth"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <input
              type="text"
              id="nid_no"
              name="nid_no"
              placeholder="NID No."
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
          {/*======================Blood + Gender ===================================*/}
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="text"
              id="blood_group"
              name="blood_group"
              placeholder="Blood Group"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <select
              type="text"
              name="gender"
              id="gender"
              className="block border-2 w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg border-gray-300 text-gray-500"
              required
            >
              <option value="0">Gender</option>
              <option value="1">Mail</option>
              <option value="2">Femail</option>
            </select>
          </div>
          {/*============================ Present Address ===========================*/}
          <div className="pt-5">
            <input
              type="text"
              id="present_adress"
              name="present_adress"
              placeholder="Present Address"
              className="w-full h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
          {/*===========================Father's + Mother's =========================*/}
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="text"
              id="fathers_name"
              name="fathers_name"
              placeholder="Father's Name"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <input
              type="text"
              id="mothers_name"
              name="mothers_name"
              placeholder="Mother's Name"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
          {/*============================= Gurdian ==================================*/}
          <div className="flex justify-between gap-6 pt-5">
            <input
              type="text"
              id="gourdian_name"
              name="gardian_name"
              placeholder="Gourdian Name"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
            <input
              type="text"
              id="gardian_number"
              name="gardian_number"
              placeholder="Gourdian Number"
              className="w-1/2 h-8 sm:h-8 md:h-9 lg:h-9 text-sm sm:text-sm md:text-tMd lg:text-tMd
               rounded-lg px-4 border-gray-300 border-2"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInfo;
