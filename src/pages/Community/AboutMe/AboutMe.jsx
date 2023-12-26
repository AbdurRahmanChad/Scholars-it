import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center gap-6">
        <div className="flex gap-1">
          <h1 className="text-xl font-medium group relative inline-block cursor-pointer">
            About
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-green-600 transform scale-x-0 origin-left transition-transform group-first-of-type:scale-x-100"></span>
          </h1>
          <p className="text-xl font-medium">Me</p>
        </div>
        <p className="text-2xl rotate-90">...</p>
      </div>
      <div className="py-5 text-justify text-sm text-gray-400">
        <p>
          Hay i am md abdur rahman from sherpur. i am front-end developer and
          react.js
        </p>
        <p className="py-5">my favoret song is let me down slowly......</p>
      </div>
      {/*========================== About Me ===================================*/}
      <div className=" text-sm">
        <div className="flex gap-20">
          <p className="text-gray-500">Join:</p>
          <p>30 july 2023</p>
        </div>
        <div className="flex gap-14 py-1">
          <p className="text-gray-400">Mobile:</p>
          <p>+88 01721-XXXXXX</p>
        </div>
        <div className="flex gap-[68px] py-1">
          <p className="text-gray-400">Email:</p>
          <p>hello@gmail.com</p>
        </div>
        <div className="flex gap-11 py-1">
          <p className="text-gray-400">Location:</p>
          <p>Malibag</p>
        </div>
        <div className="flex gap-20 py-1">
          <p className="text-gray-400">City:</p>
          <p>Dhaka</p>
        </div>
        <div className="flex gap-12 py-1">
          <p className="text-gray-400">Country:</p>
          <p>Bangladesh</p>
        </div>
        <div className="flex gap-[76px] py-1">
          <p className="text-gray-500">Web:</p>
          <p>www.abzus.com</p>
        </div>
        <div className="flex gap-20 py-1">
          <p className="text-gray-500">Join:</p>
          <div className="flex gap-3">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
