import React from "react";
import ButtonHome from "./ButtonHome";
import BannarBg from "../../assets/home_img/imk.jpg";
import JoinSeminarBtn from "../ReUsedComponent/JoinSeminarBtn";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const BannerHome = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <JoinSeminarBtn />
        <header className="bg-bgBannar ">
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 sm:gap-0 md:gap-10 lg:gap-10">
            {/*=================== Text Start ==================*/}
            <div className="py-10 md:py-20 lg:py-32 pl-10 sm:pl-10 md:pl-28 lg:pl-28">
              <div className="">
                <h1 className="font-semibold text-xl sm:text-xl md:text-xl lg:text-3xl text-green-600 ">
                  GROW WITH SKILL
                </h1>
                <div className="flex items-center gap-1 md:gap-2 lg:gap-6 py-1 sm:py-1 md:py-4 lg:py-5">
                  <p className="font-semibold text-xs sm:text-xs md:text-[10px] lg:text-lg">
                    Enhance Your Skill Label.
                  </p>
                  <p className="mx-6 md:mx-0 lg:mx-0 text-[8px] md:text-[8px] lg:text-sm text-green-600">
                    With 100% Ensure
                  </p>
                </div>
              </div>
              {/*===========================================================================*/}
              <div className="my-4 sm:my-4 md:my-0 lg:my-8">
                <p className="text-[10px] lg:text-lg">
                  The Next Free Class will be start at 27 Sep 2023.
                </p>
                <h1 className=" text-green-600 text-md sm:text-lg md:text-md lg:text-lg">
                  08:30 PM
                </h1>
              </div>
              <div className="mt-6">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "" : "scholarsBtnHome"
                  }
                  to="/Seminars"
                >
                  Join Free Seminar
                </NavLink>
              </div>
            </div>
            {/*=================== Text End ==================*/}
            <div className="pl-10 md:pl-0 lg:pl-0">
              <img
                className="mt-0 md:mt-32 lg:mt-24"
                src={BannarBg}
                alt="BannarBg"
              />
            </div>
          </div>
        </header>
      </section>
      {/*======================== Live Section Start=====================*/}
      <ButtonHome />
    </>
  );
};

export default BannerHome;
