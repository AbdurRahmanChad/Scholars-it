import React from "react";
import Image1 from "../../assets/course_img/img1.png";
import Image2 from "../../assets/course_img/img2.png";
import Image3 from "../../assets/course_img/img3.png";
import Image4 from "../../assets/course_img/img4.png";

const imagegrid = [
  {
    id: 1,
    image: Image1,
    title: "Trusted Content",
  },
  {
    id: 2,
    image: Image2,
    title: "Experienced Teachers",
  },
  {
    id: 3,
    image: Image3,
    title: "Life Time Access",
  },
  {
    id: 4,
    image: Image4,
    title: "Sertification",
  },
];

const TrustedCourseBtn = () => {
  return (
    <section className="mx-10 sm:mx-10 md:mx-40 lg:mx-40">
      <div className="container mx-auto my-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center gap-10">
          {/*======================flex Start =======================*/}
          {imagegrid.map((imageone) => (
            <CoursesContentImg key={imageone} imageone={imageone} />
          ))}
          {/*======================flex  End=======================*/}
        </div>
      </div>
    </section>
  );
};

export default TrustedCourseBtn;

export function CoursesContentImg({ imageone }) {
  const { image, title } = imageone;
  return (
    <div className="text-center">
      <img
        src={image}
        alt={title}
        className="w-12 sm:w-12 md:w-12 lg:w-26 h-full object-cover mx-auto"
      />
      <div className="text-sm sm:text-sm md:text-[10px] lg:text-[13px] py-6  lg:py-8 font-semibold">
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
}
