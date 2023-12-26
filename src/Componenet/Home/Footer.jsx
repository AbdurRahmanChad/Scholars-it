import React from "react";
import FooterLogo from "../../assets/sign-image/logo-white.png";
import FooterQuickText from "../ReUsedComponent/Footer/FooterQuickText";
import FooterCoursesText from "../ReUsedComponent/Footer/FooterCoursesText";
import FooterGetStartedText from "../ReUsedComponent/Footer/FooterGetStartedText";
import FooterMap from "../ReUsedComponent/Footer/FooterMap";
import FooterFollowUs from "../ReUsedComponent/Footer/FooterFollowUs";
import FooterPhnButtom from "../ReUsedComponent/Footer/FooterPhnButtom";

const Footer = () => {
  return (
    <footer className="bg-bgFooter pt-8 pb-16 sm:pb-16 md:pb-16 lg:pb-2">
      <div className="container mx-auto">
        <div className="mx-5 sm:mx-10 md:mx-24 lg:mx-28">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {/*=====================Part 01=====================================*/}
            <div className="lg:mx-6">
              <img
                src={FooterLogo}
                alt="FooterLogo"
                className="w-28 h-24 lg:w-32 lg:h-28 object-cover text-gray-300"
              />
            </div>
            {/*=====================Footer Quick Link ==========================*/}
            <FooterQuickText />
            {/*=====================Footer Our Courses =========================*/}
            <FooterCoursesText />
            {/*=====================Footer Get Started =========================*/}
            <FooterGetStartedText />
          </div>
          {/*===================== Footer Map and Followus ======================*/}
          <div className="flex lg:justify-between gap-0 sm:gap-6 md:gap-6 lg:gap-0">
            <div>
              <FooterMap />
            </div>
            <div className="">
              <FooterFollowUs />
            </div>
          </div>
        </div>
        <div className="">
          <hr className="mt-2 lg:my-2" />
          <div className="hidden sm:hidden md:hidden lg:block">
            <p className="text-white text-center text-xs">
              Copyright 2023 Scholar's IT || All Right Reserved
            </p>
          </div>
        </div>
      </div>
      {/*===================== Mobile Bottom Section ===========================*/}
      <FooterPhnButtom />
    </footer>
  );
};

export default Footer;
