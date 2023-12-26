import React from "react";

export default function () {
  return (
    <section>
      <div className="my-44">
        <div className="container mx-auto">
          <div className="w-2/3 mx-auto -mt-52 sm:-mt-52 md:-mt-60 lg:-mt-64">
            <div className=" max-w-full min-h-full bg-white py-4 lg:py-10 px-10 sm:px-10 md:px-10 lg:px-10 rounded-lg shadow-xl">
              <h1 className="text-xs sm:text-sm md:text-sm lg:text-xl font-medium text-black">
                Evenets happening In Your City
              </h1>
              <div className="py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row">
                <input
                  type="text"
                  name="Search"
                  id="search"
                  placeholder="Search"
                  className="w-full h-9 border-2 border-gray-300
                   rounded-lg text-sm md:text-sm lg:text-sm pl-2"
                />
                <select
                  name="select_city"
                  id="select_city"
                  className="w-full h-9 border-2 border-gray-300
                   mx-2 rounded-lg ml-0 md:ml-0 text-sm sm:text-sm md:text-sm lg:text-sm px-2 mt-3 md:mt-3 lg:mt-0 md:mx-2 lg:mx-2"
                  required
                >
                  <option value="0">Select City</option>
                  <option value="1">Grapics Design</option>
                  <option value="2">Digital Marketing</option>
                  <option value="3">Web Design</option>
                </select>

                <select
                  name="all_data"
                  id="all_data"
                  className="w-full h-9  border-2 border-gray-300
                   mx-2 rounded-lg text-sm sm:text-sm md:text-sm lg:text-sm ml-0 px-2 mt-3 lg:mt-0"
                  required
                >
                  <option value="0">All Data</option>
                  <option value="1">Grapics Design</option>
                  <option value="2">Digital Marketing</option>
                  <option value="3">Web Design</option>
                </select>

                <div className="">
                  <button className="px-6 md:px-10 lg:px-6 py-1 bg-green-500 rounded-lg text-sm sm:text-sm md:text-sm lg:text-lg mt-3 lg:mt-0">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
