import React from "react";
import Logo from "../../assets/sign-image/logo-white.png";
import { Link } from "react-router-dom";
import Navbar from "../../Componenet/Home/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <div className="max-w-full min-h-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/*=============================================================*/}
            <div className="signUp-Bg hidden lg:block">
              <div className="mt-20">
                <img className="w-24 h-20 mx-auto" src={Logo} alt="Logo" />
              </div>
              <div className="mt-32">
                <div className="">
                  <div className="text-white px-32 pb-32">
                    <h1 className="text-4xl pt-12">
                      Looks Like You're New Here!
                    </h1>
                    <p className="text-lg py-4">
                      Sign Up With Your Details to Get Started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*==============================================================================*/}
            <div className="mt-20 sm:mt-20 md:mt-32 lg:mt-32 mb-10 sm:mb-10 md:mb-20 lg:mb-20  ">
              <div className="">
                <h1 className="text-center lg:pb-12 text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-medium">
                  Sign In
                </h1>
                <div className="">
                  <form action="" className="">
                    {/*===================================== Name ==================================*/}
                    <div className="flex flex-col items-center">
                      <label
                        className="mr-60 sm:mr-60 md:mr-[240px] lg:mr-[240px] mb-2 text-md sm:text-md md:text-tmd lg:text-tMd"
                        htmlFor=""
                      >
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="full_name"
                        id="full_name"
                        placeholder="Enter Your Name"
                        className="w-80 sm:w-80 md:w-80 lg:w-80 h-8 sm:h-8 md:h-9 lg:h-9 text-xm sm:text-sm
                         md:text-tMd lg:text-tMd rounded-lg px-4 border-2"
                      />
                    </div>
                    {/*=================================== Email ====================================*/}
                    <div className="flex flex-col items-center pt-4 sm:pt-4 md:pt-6 lg:pt-6">
                      <label
                        className="mr-[265px] sm:mr-[265px] md:mr-[270px] lg:mr-[270px] mb-2 text-md sm:text-md md:text-tmd lg:text-tMd"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="w-80 sm:w-80 md:w-80 lg:w-80 h-8 sm:h-8 md:h-9 lg:h-9 text-xm sm:text-sm 
                        md:text-tMd lg:text-tMd rounded-lg px-4 border-2"
                      />
                    </div>
                    {/*=======================================================================*/}
                    <div className="flex flex-col items-center pt-4 sm:pt-4 md:pt-6 lg:pt-6">
                      <label
                        className="mr-60 sm:mr-60 md:mr-[240px] lg:mr-[240px] mb-2 text-md sm:text-md md:text-tmd lg:text-tMd"
                        htmlFor=""
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="Password"
                        id="password"
                        placeholder="Enter Your Password"
                        className="w-80 sm:w-80 md:w-80 lg:w-80 h-8 sm:h-8 md:h-9 lg:h-9 text-xm sm:text-sm 
                        md:text-tMd lg:text-tMd rounded-lg px-4 border-2"
                      />
                    </div>
                    {/*=======================================================================*/}
                    <div className="flex justify-center items-center gap-14 pt-4 sm:pt-4 md:pt-6 lg:pt-6">
                      <div className="text-sm sm:text-sm md:text-tMd lg:text-tMd">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                          className="md:w-5 md:h-5 lg:w-3 lg:h-3"
                        />
                        <label className="pl-2" htmlFor="">
                          i read and agry with trms & conditions!
                        </label>
                      </div>
                    </div>
                    {/*=======================================================================*/}
                    <div className="mt-4 sm:mt-4 md:mt-8 lg:mt-8 text-center">
                      <button
                        className="px-[136px] sm:px-[136px] md:px-32 lg:px-32 py-1 sm:py-1 md:py-2 lg:py-2 bg-green-500 
                    text-xm sm:text-sm md:text-tMd lg:text-tMd rounded-lg"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-6 text-center">
                      <p className="text-sm sm:text-sm md:text-sm lg:text-sm">
                        Don't have An Account?
                        <Link to="/SignIn">
                          <span className="px-4 text-green-500">Sign In!</span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
