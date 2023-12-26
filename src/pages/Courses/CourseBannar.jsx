import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import BannarBg from "../../assets/home_img/imk.jpg";
import JoinSeminarBtn from "../../Componenet/ReUsedComponent/JoinSeminarBtn";

const CourseBannar = () => {
  return (
    <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
      <JoinSeminarBtn />
      <header className="bg-bgBannar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center gap-10">
          {/*=================== Text Start ==================*/}
          <div className="py-10 sm:py-10 md:pt-16 lg:py-20 md:pl-32 md:pr-0 lg:pl-28 lg:pr-0 mx-4 sm:mx-4 md:mx-0 lg:mx-0">
            <div className="">
              <h1 className="font-bold text-2xl sm:text-2xl md:text-lg lg:text-3xl text-green-600 ">
                OUR TRENDING COURSES
              </h1>
              <div className="flex items-center gap-6 pt-4 sm:pt-4 md:pt-2 lg:pt-6">
                <div>
                  <h3 className="font-medium text-lg sm:text-lg md:text-[9px] lg:text-sm ">
                    5 Courses Available Now.
                  </h3>
                </div>
                <div className="flex justify-center items-center">
                  <div className="flex text-green-600 text-xs sm:text-xs md:text-[6px] lg:text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <div>
                    <h1 className="mx-6 md:mx-2 text-sm md:text-[8px] lg:text-sm text-green-600">
                      7k reviews
                    </h1>
                  </div>
                </div>
              </div>
              <div className="my-0 lg:my-10">
                <p className="text-sm sm:text-sm md:text-sm lg:text-lg my-3 ">
                  70+ students are learning on live courses now.
                </p>
                <p className="text-sm sm:text-sm md:text-sm lg:text-lg my-3 ">
                  18k+ students have been certified live courses by scholar's
                  it!
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button className="scholarsBtn">Join Free Seminar</button>
            </div>
          </div>
          {/*=================== Text End ===================================*/}
          {/*=================== Image Start ================================*/}
          <div>
            <img
              className="mt-0 md:mt-32 lg:mt-24"
              src={BannarBg}
              alt="BannarBg"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default CourseBannar;
