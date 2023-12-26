import React from "react";
import SuccessImg from "../../assets/course_img/free-course.jpg";
const eventschange = [
  {
    image: SuccessImg,
    title: "Join Our Free Courses Today!",
    text: "Learn Something New Everyday with Scholar IT. Sed quisquam nobis numquam vitae eaque nostrum!",
  },
];

const CoursesSuccStory = () => {
  return (
    <section className="">
      <div className="conatiner mx-auto">
        <div className="">
          {/*======================================================*/}
          {eventschange.map((changebg) => (
            <ChangeImage key={changebg} changebg={changebg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSuccStory;

export function ChangeImage({ changebg }) {
  const { image, title, text } = changebg;
  return (
    <div className="flex flex-col sm:flex-col md:flex-row-reverse lg:flex-row-reverse">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="max-w-full min-h-full object-cover"
        />
      </div>
      {/*======================================================*/}
      <div className="w-full md:w-1/2 lg:w-1/2 bg-green-600 px-3 sm:px-3 md:px-[124px] lg:px-28 py-6 sm:py-6 lg:py-0">
        <div className="mt-6 sm:mt-6 md:mt-8 lg:mt-20">
          <h1 className="text-md sm:text-md md:text-sm lg:text-2xl text-white font-medium">
            {title}
          </h1>
          <p className="text-xs sm:text-xs md:text-[10px] lg:text-tMd text-justify py-3 sm:py-3 md:py-3 lg:py-5 text-white">
            {text}
          </p>
          <div className="md:pt-4 lg:pt-6 text-left">
            <button className="px-6 py-2 bg-slate-200 text-bold text-sm sm:text-sm md:text-xs lg:text-tMd rounded-lg text-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
