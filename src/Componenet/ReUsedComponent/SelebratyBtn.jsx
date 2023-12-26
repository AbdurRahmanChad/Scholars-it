import React from "react";
import profile from "../../assets/home_img/selibraty-1.jpg";

const SelebratyBtn = () => {
  return (
    <div>
      <div className="shadow-2xl p-4 lg:p-8 rounded-lg bg-bgHome">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-0 md:gap-0 lg:gap-6">
          {/*==================================================*/}
          <div className="w-full sm:w-full md:w-full lg:w-1/2 flex flex-row sm:flex-row md:flex-row lg:flex-col gap-4 sm:gap-4 md:gap-4 lg:gap-6">
            <div>
              <img
                src={profile}
                alt="Selibraty1"
                className="rounded-lg w-28 sm:w-28 md:w-20 lg:w-44"
              />
            </div>
            <div className="my-4 lg:my-0">
              <h1 className="text-sm sm:text-sm md:text-xs lg:text-lg  text-black">
                Mr Michel Stark
              </h1>
              <h1 className="text-xs sm:text-xs md:text-xs lg:text-tMd text-slate-500 py-1">
                Msc In CSE BUET.
              </h1>
              <p className="text-xs sm:text-xs md:text-xs lg:text-tMd text-slate-500">
                Software Eng.
              </p>
            </div>
          </div>
          <p className="block w-full h-[1px] bg-slate-300 sm:hidden md:block lg:hidden my-3"></p>
          {/*==================================================*/}
          {/*==================================================*/}
          <div className="w-full text-center">
            <h1 className="text-md sm:text-md md:text-xs lg:text-xl lg:font-medium">
              Grow Skill
            </h1>
            <p className="text-sm md:text-xs lg:text-sm py-2">
              Fee: 500 Tk Only
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-justify pt-3 sm:pt-3 md:pt-1 lg:pt-5 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              placeat illum, consequuntur minima minus exercitationem omnis aut
              totam iureiste
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-justify py-6 md:py-3 lg:py-6 text-slate-500">
              debitis tempora ipsum veniam nulla. Saepe est obcaecati vitae
              voluptas.
            </p>
            <button className="joinBtn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelebratyBtn;
