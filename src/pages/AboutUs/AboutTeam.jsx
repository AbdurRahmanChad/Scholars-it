import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import AboutGridImg from "../../assets/about_img/aboutBg.jpg";
import ProfileImg from "../../assets/about_img/profile-1.jpg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

const aboutteam = [
  {
    id: 1,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 2,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 3,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 4,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 5,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 6,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 7,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
  {
    id: 8,
    image: AboutGridImg,
    prfile: ProfileImg,
    name: "Abdur Rahman",
    title: "Digital Marketing",
  },
];

const AboutTeam = () => {
  return (
    <section className="my-12">
      <div className="conatiner mx-auto">
        {/*========================Button=========================*/}
        <div className="mx-4 sm:mx-4 md:mx-32 lg:mx-32">
          <AboutHeBtn
            title="Our Instructors"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime sit minima."
          />
          {/*======================== Grid Start =========================*/}
          <div>
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 items-center mt-10">
              {/*======================== Grid Part 01 =========================*/}
              {aboutteam.map((team) => (
                <TeamgridImg key={team.id} team={team} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

export function TeamgridImg({ team }) {
  const { name, title } = team;
  return (
    <div className="w-full shadow-2xl border-2 rounded-lg">
      {/*===================== Button + Text Div ================== */}
      <div className="text-center py-6 sm:py-6 md:py-6 lg:py-6">
        {/*===================== Button ================== */}
        <div className="left-0 w-full flex flex-col items-center justify-center sm:pb-3 md:pb-2 lg:pb-2">
          <img
            src={ProfileImg}
            alt="ProfileImg"
            className="w-24 sm:w-20 md:w-20 lg:w-20 rounded-full border-2 sm:border-2 md:border-4 lg:border-4 border-green-600"
          />
        </div>
        {/*===================== Text ================== */}
        <div className="pt-2">
          <h1 className="text-sm sm:text-sm md:text-lg lg:text-lg">{name}</h1>
          <p className="text-xs sm:text-xs md:text-md lg:text-md py-1 sm:py-1 md:py-1 lg:py-1">
            {title}
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 sm:gap-3 md:gap-2 lg:gap-2 pt-2 object-cover ">
          <IoLogoFacebook className="w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-5 md:h-5 lg:w-5 lg:h-4 object-cover text-slate-500" />
          <BsInstagram className="w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-5 md:h-4 lg:w-5 lg:h-4 object-cover text-slate-500" />
          <BsLinkedin className="w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-5 md:h-4 lg:w-5 lg:h-4  object-cover text-slate-500" />
          <BsTwitter className="w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-5 md:h-4 lg:w-5 lg:h-4  object-cover text-slate-500" />
        </div>
      </div>
    </div>
  );
}
