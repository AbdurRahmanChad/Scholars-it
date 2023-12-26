import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

const FooterFollowUs = () => {
  return (
    <div>
      <div className="pt-4 md:pt-4 lg:pt-4 -ml-8 sm:-ml-0 md:-ml-0 lg:-ml-40 xl:-ml-44 2xl:-ml-72">
        <div className=" text-slate-100">
          <h1 className="text-sm md:text-sm lg:text-xl text-white">
            Follow Us
          </h1>
          <div className="flex gap-3 md:gap-4 lg:gap-6 mt-4">
            <a href="http://facebook.com">
              <FaSquareFacebook className="w-3 h-3" />
            </a>
            <a href="http://">
              <BsInstagram className="w-3 h-3" />
            </a>
            <a href="http://">
              <BsLinkedin className="w-3 h-3" />
            </a>
            <a href="http://">
              <BsTwitter className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFollowUs;
