import React from "react";

function LiveClassBtn({ image, title, text }) {
  return (
    <div className="">
      <img
        className="w-16 sm:w-16 md:w-24 lg:w-24 mx-auto lg:my-4"
        src={image}
        alt={title}
      />
      <div className="text-gray-600">
        <h1 className="text-center text-tMd  md:text-xs lg:text-xl py-2 sm:py-2 md:py-2 lg:py-0 font-medium">
          {title}
        </h1>
        <p className="text-center text-xs sm:text-xs md:text-[8px] lg:text-md">
          {text}
        </p>
      </div>
    </div>
  );
}

export default LiveClassBtn;
