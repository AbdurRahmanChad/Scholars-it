import React from "react";
import HeadingBtn from "../ReUsedComponent/HeadingBtn";
import SelebratyBtn from "../ReUsedComponent/SelebratyBtn";

const SelebratySeminars = () => {
  return (
    <section className="mb-10 sm:mb-10 md:mb-20 lg:mb-20 bg-white">
      <div className="container mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-32">
          <HeadingBtn
            title="Selibraty Seminars"
            text=" Lorem ipsum dolor sit  consectetur adipisicing elit."
          />
          {/*==================================================*/}
          <div className="pt-6 sm:pt-6 md:pt-0 lg:pt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
              {/*=========================Grid 01 =========================*/}
              <SelebratyBtn />
              {/*========================grid 02 ==========================*/}
              <SelebratyBtn />
              {/*========================grid 02 end ==========================*/}
              {/*========================grid 03 ==========================*/}
              <SelebratyBtn />
              {/*========================grid 03 end ==========================*/}
              {/*========================grid 04 ==========================*/}
              <SelebratyBtn />
              {/*========================grid 04 end ==========================*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelebratySeminars;
