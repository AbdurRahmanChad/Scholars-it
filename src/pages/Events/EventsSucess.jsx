import React from "react";
import Travel from "../../assets/events_img/travel.jpg";
const eventssuccess = [
  {
    image: Travel,
    title: "A Change to Explore the World!",
    text: "Learn Something New Everyday with Scholar IT. Sed quisquam nobis numquam vitae eaque nostrum!",
  },
];

const EventsSucess = () => {
  return (
    <section className="">
      <div className="conatiner mx-auto">
        <div className="">
          {/*======================================================*/}
          {eventssuccess.map((success) => (
            <EventsImage key={success} success={success} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSucess;
export function EventsImage({ success }) {
  const { image, title, text } = success;
  return (
    <div className="flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse">
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="max-w-full min-h-full object-cover"
        />
      </div>
      {/*======================================================*/}
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 bg-green-600 px-3 sm:px-3 md:px-28 lg:px-28 py-3 sm:py-3 ">
        <div className="mt-0 sm:mt-6 md:mt-10 lg:mt-28">
          <h1 className="text-md sm:text-md md:text-sm lg:text-2xl text-white font-medium">
            {title}
          </h1>
          <p className="text-xs sm:text-xs md:text-xs lg:text-tMd text-justify py-3 sm:py-3 md:py-5 lg:py-5 text-white">
            {text}
          </p>
          <div className="pt-0 sm:pt-0 md:pt-0 lg:pt-6 text-left md:py-6">
            <button className="px-6 py-2 bg-slate-200 text-bold text-sm sm:text-sm md:text-xs lg:text-tMd rounded-lg text-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
