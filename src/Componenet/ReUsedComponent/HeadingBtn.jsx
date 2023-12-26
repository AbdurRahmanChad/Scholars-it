import React from "react";

export default function HeadingBtn({ title, text }) {
  return (
    <div>
      <div className="text-center py-0 sm:py-0 md:py-6 lg:py-6">
        <h1 className="text-xl sm:text-xl md:text-3xl lg:text-3xl font-medium">
          {title}
        </h1>
        <p className="text-xs sm:text-xs md:text-lg lg:text-lg py-2 lg:py-4">
          {text}
        </p>
      </div>
    </div>
  );
}
