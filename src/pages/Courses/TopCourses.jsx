import React, { useState } from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import TrundingCrsBtn from "../../Componenet/ReUsedComponent/TrundingCrsBtn";
import GridImg1 from "../../assets/home_img/photo-1.jpg";
import GridImg2 from "../../assets/home_img/photo-2.jpg";
import GridImg3 from "../../assets/home_img/photo-3.jpg";
const courses = [
  {
    id: 1,
    image: GridImg1,
    title: "Digital Marteking",
    reviews: "7k Reviews",
    price: "25,000 Tk only",
  },
  {
    id: 2,
    image: GridImg2,
    title: "Graphics Design",
    reviews: "7k Reviews",
    price: "25,000 Tk only",
  },
  {
    id: 3,
    image: GridImg3,
    title: "Web Develpment",
    reviews: "7k Reviews",
    price: "25,000 Tk only",
  },
];

const TopCourses = () => {
  const [Courses, setCourses] = useState("live");

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-32">
          <AboutHeBtn
            title="Choose Top Courses"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id consequuntur accusantium"
          />
          {/*============= Top Button =======================================*/}
          <div className="flex flex-row justify-center items-center md:flex-row lg:flex-row gap-6 lg:gap-10 px-6 pt-4 lg:pt-6 lg:px-0">
            <div className="flex justify-between gap-6">
              <button
                className={`pay-btnTwo ${Courses === "live" ? "active" : ""}`}
                onClick={() => {
                  setCourses("live");
                }}
              >
                Live Courses
              </button>
              <button
                className={`pay-btnTwo ${
                  Courses === "offline" ? "active" : ""
                }`}
                onClick={() => {
                  setCourses("offline");
                }}
              >
                Offline Courses
              </button>

              <button
                className={`pay-btnTwo ${
                  Courses === "recorded" ? "active" : ""
                }`}
                onClick={() => {
                  setCourses("recorded");
                }}
              >
                Recorded Coueses
              </button>
            </div>
          </div>
          {/*============= Top Button End====================================*/}
          {Courses === "live" && (
            <div>
              <div className="container mx-auto">
                <div className="my-10 lg:my-20">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {courses.map((course) => (
                      <TrundingCrsBtn key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*============= Top Button End====================================*/}
          {Courses === "offline" && (
            <div>
              <div className="container mx-auto">
                <div className="my-10 lg:my-20">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {courses.map((course) => (
                      <TrundingCrsBtn key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*============= Top Button End====================================*/}
          {Courses === "recorded" && (
            <div>
              <div className="container mx-auto">
                <div className="my-10 lg:my-20">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {courses.map((course) => (
                      <TrundingCrsBtn key={course.id} course={course} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*================================================================*/}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
