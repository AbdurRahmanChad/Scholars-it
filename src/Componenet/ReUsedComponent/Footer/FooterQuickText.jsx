import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
const quicklink = [
  {
    id: 1,
    text: "About Us",
    rout: "/aboutus",
  },
  {
    id: 2,
    text: "Privacy Policy",
    rout: "/",
  },

  {
    id: 3,
    text: "Terms & Conditions",
    rout: "/",
  },
  {
    id: 4,
    text: "Community Standerd",
    rout: "/",
  },
];

export default function FooterQuickText() {
  return (
    <div className="text-white">
      <h1 className="text-md md:text-md lg:text-tMd">Quick Link</h1>
      <div className="text-gray-300">
        {quicklink.map((alltext) => (
          <QuickLinkText key={alltext.id} alltext={alltext} />
        ))}
      </div>
    </div>
  );
}

export function QuickLinkText({ alltext }) {
  const { text, rout } = alltext;
  return (
    <div className="text-xs md:text-xs lg:text-sm">
      <div className="flex">
        <HiChevronRight className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 mt-2.5 md:mt-2 lg:mt-3" />
        <Link to={rout}>
          <p className="pt-3">{text}</p>
        </Link>
      </div>
    </div>
  );
}
