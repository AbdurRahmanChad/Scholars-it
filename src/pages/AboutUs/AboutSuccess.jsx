import React from "react";
import SuccessImg from "../../assets/about_img/success-cover.jpg";

const AboutSuccess = () => {
  return (
    <section className="my-20">
      <div className="conatiner mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-0 lg:mx-0">
          <div className="flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse">
            {/*======================================================*/}
            <div className="w-full">
              <img
                src={SuccessImg}
                alt="SuccessImg"
                className="max-w-full min-h-full"
              />
            </div>
            {/*======================================================*/}
            <div className="bg-green-600 w-full">
              <div className="px-4 sm:px-8 md:px-32 lg:px-32 py-6 sm:py-6 md:py-10 lg:py-32">
                <h1 className="text-lg sm:text-lg md:text-sm lg:text-2xl text-white font-semibold">
                  4 Years Of Success
                </h1>
                <p className="text-xs sm:text-xs md:text-[10px] lg:text-sm text-justify py-2 sm:py-2 md:py-4 lg:py-4 text-white font-medium">
                  Learn Something New Everyday with Scholar IT. Sed quisquam
                  nobis numquam vitae eaque nostrum!
                </p>
                <div className="pt-2 sm:pt-2 md:pt-3 lg:pt-6 text-left sm:text-left md:text-left lg:text-left">
                  <button className="px-6 py-2 bg-slate-200 font-medium text-xs sm:text-xs md:text-sm lg:text-tMd rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSuccess;
