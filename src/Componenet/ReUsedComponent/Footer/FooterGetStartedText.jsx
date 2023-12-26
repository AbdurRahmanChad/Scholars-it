import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
const getstarttext = [
  {
    id: 1,
    text: "Admission",
    route: "/Admission",
  },
  {
    id: 2,
    text: "Community",
    route: "/Communuty",
  },
  {
    id: 3,
    text: "Join Events",
    route: "/",
  },
  {
    id: 4,
    text: "Join free Seminar",
    route: "/",
  },
];

const FooterGetStartedText = () => {
  return (
    <div className="text-white">
      <h1 className="text-md md:text-md lg:text-tMd">Get Started</h1>
      <div className="text-gray-300 pt-0.5">
        {getstarttext.map((allgettext) => (
          <GetStartText key={allgettext.id} allgettext={allgettext} />
        ))}
      </div>
    </div>
  );
};

export default FooterGetStartedText;

export function GetStartText({ allgettext }) {
  const { text, route } = allgettext;
  return (
    <div className="text-xs sm:text-xs md:text-xs lg:text-sm">
      <div className="flex">
        <HiChevronRight className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 mt-1.5 sm:mt-1.5 md:mt-2 lg:mt-3" />
        <Link to={route}>
          <p className="pt-3">{text}</p>
        </Link>
      </div>
    </div>
  );
}
