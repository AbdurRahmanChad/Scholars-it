import React from "react";

const CourseInfo = () => {
  return (
    <div>
      <div className="bg-gray-200 p-1 sm:p-1 md:p-3 lg:p-3 rounded-lg mt-10">
        <div className="flex justify-between items-center gap-6 font-medium px-2">
          <h1 className="text-sm sm:text-sm md:text-xl lg:text-xl">
            Course Info
          </h1>
          <p className="text-xs sm:text-xs md:text-tMd lg:text-tMd bg-gray-300 p-2 rounded-full">
            02
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between gap-6 pt-5">
          <div className="w-full">
            <select
              name="select_course"
              id="select_course"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9
               text-sm sm:text-sm md:text-tMd lg:text-tMd px-4  text-gray-500"
              required
            >
              <option value="0">Select Course</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <select
              name="course_type"
              id="course_type"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9 
              text-sm sm:text-sm md:text-tMd lg:text-tMd px-4 text-gray-500"
              required
            >
              <option value="0">Courses Type</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
        </div>
        {/*========================= Admission Form 01 End =======================*/}
        {/*========================  Admission Form 02 Start  ====================*/}
        <div className="flex justify-between gap-6">
          <div className="w-full">
            <select
              name="start_date"
              id="start_date"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9
               text-sm sm:text-sm md:text-tMd lg:text-tMd px-4 text-gray-500"
              required
            >
              <option value="0">Start Date</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
          <div className="w-full">
            <select
              name="batch_no"
              id="batch_no"
              placeholder="Select_course"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9
               text-sm sm:text-sm md:text-tMd lg:text-tMd px-4 text-gray-500"
              required
            >
              <option value="0">Batch No</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
        </div>
        {/*==========================Admission Form 02 End =======================*/}
        {/*==========================Admission Form 03 Start =====================*/}
        <div className="flex justify-between gap-6 pt-5">
          <div className="w-full">
            <select
              name="class_time"
              id="class_time"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9
               text-sm sm:text-sm md:text-tMd lg:text-tMd px-4 text-gray-500"
              required
            >
              <option value="0">Class Time</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
          <div className="w-full">
            <select
              name="schedule"
              id="schedule"
              placeholder="Select_course"
              className="block border border-gray-300 rounded-lg w-full  h-8 sm:h-8 md:h-9 lg:h-9
               text-sm sm:text-sm md:text-tMd lg:text-tMd px-4 text-gray-500"
              required
            >
              <option value="0">Schedule</option>
              <option value="1">Grapics Design</option>
              <option value="2">Digital Marketing</option>
              <option value="3">Web Design</option>
            </select>
          </div>
        </div>
        {/*========================= Admission Form 03 End =======================*/}
      </div>
    </div>
  );
};

export default CourseInfo;
