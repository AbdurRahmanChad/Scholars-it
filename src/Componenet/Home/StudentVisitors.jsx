import React from "react";
import TotalVisitorsBtn from "../ReUsedComponent/TotalVisitorsBtn";

const StudentVisitors = () => {
  return (
    <div>
      <div className="my-6 sm:my-6 md:my-0 lg:my-0">
        <div className="bg-green-600 mt-16 sm:mt-16 md:mt-0 lg:mt-0 my-0 sm:my-0 md:my-16 lg:my-20">
          <div className="container mx-auto">
            <div className="py-6 mx-0 sm:mx-0 md:mx-56 lg:mx-56">
              <div className="flex flex-col items-center sm:flex-col md:flex-col lg:flex-row py-10 lg:py-20 gap-10">
                <div className="flex justify-around">
                  <TotalVisitorsBtn title="Total Visitors" text="10,000" />
                </div>
                <div className="flex">
                  <TotalVisitorsBtn title="Running Students" text="7,500" />
                </div>
                <div className="flex">
                  <TotalVisitorsBtn title="Profesional Works" text="3,000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentVisitors;
