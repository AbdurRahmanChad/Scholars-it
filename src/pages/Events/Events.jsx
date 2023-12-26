import React from "react";
import Navbar from "../../Componenet/Home/Navbar";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import CountDownTimer from "./CountDownTimer";
import JoinSeminarBtn from "../../Componenet/ReUsedComponent/JoinSeminarBtn";
import SearchEvtns from "./SearchEvtns";
import EvenetsCategory from "./EvenetsCategory";
import EventsSucess from "./EventsSucess";
import EventsExparts from "./EventsExparts";
import EventUpComingCrs from "./EventUpComingCrs";

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="pt-14 sm:pt-14 md:pt-10 lg:pt-10">
        <JoinSeminarBtn />
        <div className="max-w-full min-h-full about-Bg">
          <div className="container mx-auto overflow-hidden">
            {/*=================== Text Start ==================*/}
            <div className="my-10 sm:my-10 md:my-20 lg:my-32 mx-12 sm:mx-12 md:mx-28 lg:mx-32">
              <div className="text-white">
                <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold ">
                  Scholars IT Institiut
                </h1>
                <p className="hidden md:block lg:block md:text-xl lg:text-xl pt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, nihil.
                </p>
              </div>
              <div className="text-white pt-4 sm:pt-6 md:pt-10 lg:pt-12 flex gap-12 text-sm lg:text-xl">
                <div className="flex justify-center items-center gap-2">
                  <HiLocationMarker className="" />
                  <p className="">Malibag, Dhaka</p>
                </div>
                <div className="flex gap-2">
                  <FaRegCalendarCheck />
                  <p className="">November 10 11 2023</p>
                </div>
              </div>
              <CountDownTimer />
              <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-10">
                <button className="px-6 sm:px-6 py-1 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 bg-white text-sm md:text-sm lg:text-xl rounded-lg">
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*=========================== Relative Design =====================*/}
        <SearchEvtns />
        {/*=========================== Relative Design =====================*/}
      </section>
      <EvenetsCategory />
      <EventUpComingCrs />
      <EventsSucess />
      <EventsExparts />
    </>
  );
};

export default Events;
