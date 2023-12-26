import React from "react";

export default function AboutHeBtn({ title, text }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl pb-4 sm:text-xl md:text-4xl lg:text-4xl font-semibold">
          {title}
        </h1>
        <p className="text-xs py-0 sm:py-0 md:py-4 lg:py-4 sm:text-xs md:text-sm lg:text-tMd ">
          {text}
        </p>
      </div>
    </div>
  );
}
