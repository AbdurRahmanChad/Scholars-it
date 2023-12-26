import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
const fotercourses = [
  {
    id: 1,
    text: "Digital Marketing",
    route: "/aboutus",
  },
  {
    id: 2,
    text: "Graphics Design",
    route: "/",
  },
  {
    id: 3,
    text: "Web Design",
    route: "/",
  },
  {
    id: 4,
    text: "Development",
    route: "/",
  },
];

const FooterCoursesText = () => {
  return (
    <div className="text-white">
      <h1 className="text-md md:text-md lg:text-tMd">Our Courses</h1>
      <div className="text-gray-300 pt-0.5">
        {fotercourses.map((courses) => (
          <CoursesAllText key={courses.id} courses={courses} />
        ))}
      </div>
    </div>
  );
};

export default FooterCoursesText;

export function CoursesAllText({ courses }) {
  const { text, route } = courses;
  return (
    <div className="text-xs md:text-xs lg:text-sm">
      <div className="flex">
        <HiChevronRight className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 mt-1.5 sm:mt-1.5 md:mt-2 lg:mt-3" />
        <Link to={route}>
          <p className="pt-3">{text}</p>
        </Link>
      </div>
    </div>
  );
}
