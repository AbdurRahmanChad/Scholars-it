import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import OfficeViewImg from "../../assets/about_img/office-view.jpg";
import { AiOutlineCheckSquare } from "react-icons/ai";

const besttext = new Array(5).fill(
  <h1 className="flex gap-3 justify-center items-center pt-6">
    <AiOutlineCheckSquare className="text-green-700 lg:text-xl" />
    We Have 4 Years experience With Successfull
  </h1>
);

const AboutText = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-56">
            <AboutHeBtn
              title="Why We Are Best"
              text="Lorem ipsum dolor sit amet consectetur"
            />
            <div className="flex flex-col md:flex-row xl:flex-row items-center gap-0 sm:gap-0 md:gap-12 justify-center xl:gap-32 py-0 sm:py-0 md:py-2 lg:py-2">
              <div className="text-sm sm:text-sm md:text-[10px] lg:text-xs">
                {besttext.map((i) => i)}
              </div>
              <div className="text-sm sm:text-sm md:text-[10px] lg:text-xs">
                {besttext.map((i) => i)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 sm:mb-20">
        <div className="container mx-auto">
          <div className="mx-4 sm:mx-4 md:mx-32 lg:mx-32">
            <div className="w-full relative">
              <img
                className="mx-auto  border-8 border-green-700 rounded-lg w-full"
                src={OfficeViewImg}
                alt="OfficeViewImg"
              />
              <h1 className="absolute text-xl top-10 left-10 bg-slate-300 p-6 rounded-lg">
                Scholars-it Office
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutText;
