import React from "react";
import Profile from "./Profile";
import JoinSeminarBtn from "../../Componenet/ReUsedComponent/JoinSeminarBtn";
import Navbar from "../../Componenet/Home/Navbar";

const Community = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <JoinSeminarBtn />
        <div className="max-w-full min-h-full about-Bg">
          <div className="container mx-auto overflow-hidden">
            {/*=================== Text Start ==================*/}
            <div className="my-10 sm:my-10 md:my-28 lg:my-28 mx-12 sm:mx-12 md:mx-28 lg:mx-28">
              <div className="text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold">
                  Scholars IT Community
                </h1>
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm pt-4 sm:pt-4 md:pt-5 lg:pt-6">
                  Make A Easy & luxary Life Stye As Own Wishes.
                </p>
              </div>
              <div className="mt-6 sm:mt-6 md:mt-16 lg:mt-16 text-white">
                <p className="text-sm sm:text-sm md:text-3xl lg:text-3xl">
                  40,3500
                </p>
                <p className="text-xs sm:text-xs md:text-md lg:text-xl">
                  Connected People
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Profile />
    </>
  );
};

export default Community;
