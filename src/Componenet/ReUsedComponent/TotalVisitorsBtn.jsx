import React from "react";

function TotalVisitorsBtn({ title, text }) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white text-center">
        <h1 className="text-md sm:text-md md:text-2xl lg:text-xl font-medium pl-0 sm:pl-0 md:pl-6 lg:pl-8">
          {title}
        </h1>
        <p className="text-2xl lg:text-3xl font-semibold py-4 lg:pl-6">
          {text}
        </p>
      </div>
      <div className="">
        <div className="lg:w-[2px] lg:h-28 lg:mx-12 bg-slate-300"></div>
      </div>
    </div>
  );
}

export default TotalVisitorsBtn;
