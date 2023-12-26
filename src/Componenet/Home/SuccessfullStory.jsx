import React from "react";
import HeadingBtn from "../ReUsedComponent/HeadingBtn";
import Story1 from "../../assets/home_img/story-1.png";
import Story2 from "../../assets/home_img/story-2.jpg";
import Story3 from "../../assets/home_img/story-3.jpg";
import Story4 from "../../assets/home_img/story-4.jpg";
import Profile1 from "../../assets/home_img/chad.png";
import profile2 from "../../assets/home_img/selibraty-1.jpg";

const storygrid = [
  {
    id: 1,
    image: Story1,
    profile: Profile1,
    name: "Md. Abdur Rahman",
    title: "Graphics Designer",
    batch: 27,
    dist: "Sherpur",
  },
  {
    id: 2,
    image: Story2,
    profile: Profile1,
    name: "Md. Abdur Rahman",
    title: "Graphics Designer",
    batch: 27,
    dist: "Sherpur",
  },
  {
    id: 3,
    image: Story3,
    profile: Profile1,
    name: "Md. Abdur Rahman",
    title: "Graphics Designer",
    batch: 27,
    dist: "Sherpur",
  },
  {
    id: 4,
    image: Story4,
    profile: Profile1,
    name: "Md. Abdur Rahman",
    title: "Graphics Designer",
    batch: 27,
    dist: "Sherpur",
  },
];

const SuccessfullStory = () => {
  return (
    <section className="">
      <div className="container mx-auto bg-bgHome">
        <div className="mx-4 sm:mx-4 md:mx-24 lg:mx-32 md:pt-10 lg:pt-10 md:pb-16 lg:pb-16">
          <HeadingBtn
            title="Our Successfull Story"
            text="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
          {/*========================== Image+text Grid===================*/}
          <div className="mt-6">
            <div className="container mx-auto">
              <div className="grid grid-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                {storygrid.map((story) => (
                  <SuccessStoryGrid key={story.id} story={story} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfullStory;

export function SuccessStoryGrid({ story }) {
  const { image, profile, name, title, batch, dist } = story;
  return (
    <div className="relative">
      <div className="">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image}
          alt={image}
        />
      </div>
      <div className="shadow-xl rounded-xl bg-bgHeader">
        {/*================img+ text==========================*/}
        <div className="flex justify-between items-center px-4 md:px-2 lg:px-4 py-4 md:py-4 lg:py-6">
          <div className="flex items-center gap-2 lg:gap-3">
            <div>
              <img
                className="w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 object-cover rounded-full border-2
                border-green-600"
                src={profile2}
                alt={profile2}
              />
            </div>
            <div className="">
              <h1 className="text-xs md:text-[8px] lg:text-sm font-medium py-0.5 md:py-0 lg:py-0">
                {name}
              </h1>
              <h2 className="text-xs md:text-[8px] lg:text-xs pt-1 md:pt-0 lg:pt-1">
                {title}
              </h2>
            </div>
          </div>
          {/*======================Text====================*/}

          <div className="">
            <p className="text-xs md:text-[8px] lg:text-xs">Batch No.{batch}</p>
            <p className="text-xs md:text-[8px] lg:text-xs pt-1.5 md:pt-0 lg:pt-1">
              From {dist}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
