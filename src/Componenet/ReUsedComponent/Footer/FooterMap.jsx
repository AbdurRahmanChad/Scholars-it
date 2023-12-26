import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

const FooterMap = () => {
  return (
    <div>
      <div className="mt-4 md:-mt-6 lg:-mt-10 -ml-4 md:-ml-2 lg:-ml-0">
        <div className="text-gray-300 flex justify-between items-center mx-4 mt-0 md:mt-10 lg:mt-8">
          <div className="text-xs md:text-xs lg:text-tMd">
            <div className="flex gap-3 mt-2 lg:mt-4">
              <HiPhone className="w-4 h-4" />
              <a href="tel:+8801762345678">+88 01762345678</a>
            </div>
            <div className="flex relative py-1 lg:py-2">
              <div className="flex gap-3">
                <HiMail className="w-4 h-4" />
                <a href="mailto:hello@cholarsgmail.com">
                  hello@cholarsgmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <HiLocationMarker className=" w-4 h-4" />
              <p>
                Feroza tower, 8th floor, DIT <br /> Road Malibagh Chowdorypara
                Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMap;
