import React, { useState } from "react";

export default function () {
  const [breadcrumb, setBreadcrumb] = useState("timeline");
  return (
    <div className="container mx-auto">
      <div className="mx-4 sm:mx-4 md:mx-28 lg:mx-28">
        <div className="bg-white py-4 sm:py-4 md:py-5 lg:py-5 rounded-lg">
          <div className="flex flex-row sm:flex-row md:justify-between lg:justify-between items-center gap-28 md:gap-0 lg:gap-0">
            <div className="flex gap-6">
              <h1
                className={`breadcrumb ${
                  breadcrumb === "timeline" ? "group" : ""
                }`}
                onClick={() => {
                  setBreadcrumb("timeline");
                }}
              >
                TimeLine
                <span className="breadcrumb-span"></span>
              </h1>
              <h2
                className={`breadcrumb ${breadcrumb === "blog" ? "group" : ""}`}
                onClick={() => {
                  setBreadcrumb("blog");
                }}
              >
                Blog
                <span className="breadcrumb-span"></span>
              </h2>
            </div>
            <h2
              className={` breadcrumb ${
                breadcrumb === "profile" ? "group" : ""
              }`}
              onClick={() => {
                setBreadcrumb("profile");
              }}
            >
              My Profile
              <span className="breadcrumb-span"></span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
