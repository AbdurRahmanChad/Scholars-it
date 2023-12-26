import React, { useState } from "react";
import {
  BsPencilSquare,
  BsFillFileEarmarkTextFill,
  BsImage,
} from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

export default function () {
  const [Text, setText] = useState("status");
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 sm:px-6 md:px-12 lg:px-20 py-4">
          {/*====================================================================*/}
          <div className="flex justify-center items-center gap-2">
            <BsPencilSquare />
            <h1
              className={`group-btn ${Text === "status" ? "group" : ""}`}
              onClick={() => {
                setText("status");
              }}
            >
              Status
              <span className="group-btn-underline"></span>
            </h1>
          </div>
          {/*====================================================================*/}
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <BsImage />
            <h2
              className={`group-btn ${Text === "photo" ? "group" : ""}`}
              onClick={() => {
                setText("photo");
              }}
            >
              Photo/Video
              <span className="group-btn-underline"></span>
            </h2>
          </div>
          {/*====================================================================*/}
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <BsFillFileEarmarkTextFill />
            <h3
              className={`group-btn ${Text === "blog" ? "group" : ""}`}
              onClick={() => {
                setText("blog");
              }}
            >
              Blog
              <span className="group-btn-underline"></span>
            </h3>
          </div>
        </div>
        {/*============Textarea=================================================*/}
        {Text === "status" && (
          <div className="w-full">
            <textarea
              className="w-full border-y border-solid border-slate-300 outline-none text-xs sm:text-xs md:text-lg lg:text-lg px-12 pt-2"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Share What are You thingking!"
            ></textarea>
          </div>
        )}
        {/*============Textarea=================================================*/}
        {Text === "photo" && (
          <div className="w-full">
            <textarea
              className="w-full border-y border-solid border-slate-300 outline-none text-xs sm:text-xs md:text-lg lg:text-lg px-12 pt-2"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Share What are You Photo And Video!"
            ></textarea>
          </div>
        )}
        {/*============Textarea=================================================*/}
        {Text === "blog" && (
          <div className="w-full">
            <textarea
              className="w-full border-y border-solid border-slate-300 outline-none text-xs sm:text-xs md:text-lg lg:text-lg px-12 pt-2"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Share What are You Blog!"
            ></textarea>
          </div>
        )}
      </div>
      {/*======================== Icon ============================================*/}
      <div className="flex justify-between items-center px-10 pb-4">
        <div className="flex gap-4 lg:text-xl text-green-600">
          <BsImage />
          <FaUserGroup />
          <HiLocationMarker />
        </div>
        <button className="px-5 py-2 bg-green-600 rounded-lg text-sm sm:text-sm md:text-tLg lg:text-tLg text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
