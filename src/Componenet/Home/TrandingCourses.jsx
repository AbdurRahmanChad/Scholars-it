import React from "react";
import HeadingBtn from "../ReUsedComponent/HeadingBtn";
import TrundingCrsBtn from "../ReUsedComponent/TrundingCrsBtn";
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

const TrandingCourses = () => {
  return (
    <section className="bg-white pb-14">
      <div className="container mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-32">
          <HeadingBtn
            title="Our Tranding Courses"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          {/*========================== Image+text Grid===================*/}
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {courses.map((course) => (
                <TrundingCrsBtn key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrandingCourses;
