import React from "react";
import Logo from "../../assets/sign-image/logo-white.png";
import { Link } from "react-router-dom";
import Navbar from "../../Componenet/Home/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <div className="max-w-full min-h-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/*=============================================================*/}
            <div className="max-w-full min-h-full signUp-Bg hidden lg:block">
              <div className="mt-20">
                <img
                  className="w-24 h-20 mx-auto object-cover"
                  src={Logo}
                  alt="Logo"
                />
              </div>
              <div className="mt-40">
                <div className="">
                  <div className="text-center text-white px-32">
                    <h1 className="text-4xl">Welcome Back!</h1>
                    <p className="text-lg py-4">
                      we are glad to see you again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*=============================================================*/}
            <div className="mt-20 sm:mt-20 md:mt-32 lg:mt-32 mb-10 sm:mb-10 md:mb-20 lg:mb-20">
              <div className="">
                <h1 className="text-center lg:pb-12 text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-medium">
                  Sign In
                </h1>
                <div className="">
                  <form action="" className="">
                    <div className="flex flex-col items-center">
                      <label
                        className="mr-64 sm:mr-64 md:mr-64 lg:mr-64 mb-2 text-md sm:text-md md:text-lg lg:text-lg"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="w-80 sm:w-80 md:w-80 lg:w-80 h-6 sm:h-8 md:h-9 lg:h-9  text-sm sm:text-sm
                       md:text-tMd lg:text-tMd rounded-lg px-4 border-2"
                      />
                    </div>
                    <div className="flex flex-col items-center pt-6">
                      <label
                        className="mr-64 sm:mr-64 md:mr-56 lg:mr-56 mb-2 text-md sm:text-md md:text-lg lg:text-lg"
                        htmlFor=""
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="Password"
                        id="password"
                        placeholder="Enter Your Password"
                        className="w-80 sm:w-80 md:w-80 lg:w-80 h-8 sm:h-8 md:h-9 lg:h-9  text-sm sm:text-sm md:text-tMdt
                       lg:text-tMd rounded-lg px-4 border-2"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-14  pt-6">
                      <div className="text-md sm:text-md md:text-tMd lg:text-tmd">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                          className="md:w-5 md:h-5 lg:w-3 lg:h-3 -mt-2"
                        />
                        <label className="pl-2" htmlFor="">
                          Remember Me!
                        </label>
                      </div>
                      <p className="text-md sm:text-md md:text-tMd lg:text-tMd text-blue-700">
                        Forget Password?
                      </p>
                    </div>
                    <div className="mt-6 sm:mt-6 md:mt-12 lg:mt-6 text-center">
                      <button
                        className="px-[136px] sm:px-[136px] md:px-[138px] lg:px-[138px] py-1 sm:py-1 md:py-2 lg:py-2 bg-green-500 
                    text-xm sm:text-sm md:text-tMd lg:text-tMd rounded-lg"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm sm:text-sm md:text-sm lg:text-sm">
                        Don't have An Account?
                        <Link to="/SignUp">
                          <span className="px-4 text-green-500">Sign Up!</span>
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

export default SignIn;
