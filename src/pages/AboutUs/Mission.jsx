import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import MissionImg from "../../assets/about_img/mission.png";
import VissionImg from "../../assets/about_img/vission.png";

const missionvission = [
  {
    id: 1,
    image: MissionImg,
    title: "Mission",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. Ut odit nemo incidunt, est commodi sit tempora saepe beatae ab accusamus tempora saepe beatae.",
  },
  {
    id: 2,
    image: VissionImg,
    title: "Vission",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. Ut odit nemo incidunt, est commodi sit tempora saepe beatae ab accusamus tempora saepe beatae.",
  },
];

const Mission = () => {
  return (
    <section>
      <div className="container mx-auto my-16">
        <div className="mx-4 sm:mx-6 md:mx-24 lg:mx-32">
          <div>
            <AboutHeBtn
              title="Scholars It"
              text="Lorem ipsum dolor sit amet consectetur"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-rows-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-6 sm:pt-6 md:pt-0 lg:pt-0">
            {/*=============Grid 01===========================*/}
            {missionvission.map((misimg) => (
              <MissImgeGrid key={misimg} misimg={misimg} />
            ))}
            {/*=============Grid 02===========================*/}

            {/*=============Grid 02 End===========================*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

export function MissImgeGrid({ misimg }) {
  const { image, title, text } = misimg;
  return (
    <div className="flex justify-center shadow-2xl border-t-2 rounded-xl border-r-2 flex-col sm:flex-col md:flex-row lg:flex-row">
      <div className="py-2 sm:py-2 md:p-7 lg:p-8 bg-gray-50 rounded-s-0 sm:rounded-s-0 md:rounded-s-lg lg:rounded-s-lg">
        <img
          className="w-20 sm:w-20 md:w-56 lg:w-56 mx-auto sm:mx-auto md:mx-0 lg:mx-0"
          src={image}
          alt={title}
        />
      </div>
      <div className="py-2 sm:py-2 md:py-0 lg:py-0 px-4">
        <h1 className="text-md sm:text-lg md:text-lg lg:text-xl pt-2">
          {title}
        </h1>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-justify py-2">
          {text}
        </p>
      </div>
    </div>
  );
}
