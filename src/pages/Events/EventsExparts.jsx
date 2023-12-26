import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import AboutGridImg from "../../assets/about_img/aboutBg.jpg";
import ProfileImg from "../../assets/about_img/profile-1.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const instractorteam = [
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
const EventsExparts = () => {
  return (
    <section className="my-12">
      <div className="conatiner mx-auto">
        {/*========================Button=========================*/}
        <div className="mx-4 sm:mx-4 md:mx-32 lg:mx-32">
          <AboutHeBtn
            title="Speakers Who Are Exparts"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime sit minima."
          />
          {/*======================== Grid Start =========================*/}
          <div>
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 items-center  mt-10">
              {/*======================== Grid Part 01 =========================*/}
              {instractorteam.map((instractor) => (
                <InstractorImg key={instractor.id} instractor={instractor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsExparts;

export function InstractorImg({ instractor }) {
  const { image, name, title } = instractor;
  return (
    <div className="w-full shadow-lg rounded-lg">
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image}
          alt={title}
        />
      </div>
      {/*===================== Button + Text Div ================== */}
      <div className="relative text-center ">
        {/*===================== Button ================== */}
        <div className="absolute left-0 w-full flex flex-col items-center justify-center -top-10 sm:-top-10 md:-top-16 lg:-top-16 sm:pb-3 md:pb-6 lg:pb-6">
          <img
            src={ProfileImg}
            alt="ProfileImg"
            className="w-20 sm:w-20 md:w-28 lg:h-28 rounded-full border-2 sm:border-2 md:border-4 lg:border-4"
          />
        </div>
        {/*===================== Text ================== */}
        <div className="pt-12">
          <div className="pt-2">
            <h1 className="text-sm sm:text-sm md:text-xl lg:text-lg">{name}</h1>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm py-1">
              {title}
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 pt-2 pb-6 sm:pb-6 md:pb-10 lg:pb-10 ">
            <FaFacebookSquare className="w-4 h-3.5 sm:w-4 sm:h-3.5 md:w-6 md:h-5 lg:w-5 lg:h-5 object-cover text-slate-500 hover:text-green-600" />
            <FaTwitterSquare className="w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-6 md:h-5 lg:w-6 lg:h-5 object-cover text-slate-500 hover:text-green-600" />
            <FaInstagramSquare className=" w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-6 md:h-5 lg:w-6 lg:h-5 object-cover text-slate-500 hover:text-green-600" />
            <FaLinkedin className=" w-4  h-3.5 sm:w-4 sm:h-3.5 md:w-10 md:h-5 lg:w-6 lg:h-5 object-cover text-slate-500 hover:text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
