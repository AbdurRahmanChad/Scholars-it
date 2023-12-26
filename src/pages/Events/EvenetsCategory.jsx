import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import CategoriImg1 from "../../assets/events_img/img1.png";
import CategoriImg2 from "../../assets/events_img/img2.png";
import CategoriImg3 from "../../assets/events_img/img3.png";
import CategoriImg4 from "../../assets/events_img/img4.png";

const categories = [
  {
    id: 1,
    image: CategoriImg1,
    title: "Grow Skill",
    text: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    image: CategoriImg2,
    title: "Promotions",
    text: "Lorem ipsum dolor sit",
  },
  {
    id: 3,
    image: CategoriImg3,
    title: "Career Goal",
    text: "Lorem ipsum dolor sit",
  },
  {
    id: 4,
    image: CategoriImg4,
    title: "Buffet Lunch",
    text: "Lorem ipsum dolor sit",
  },
];

const EvenetsCategory = () => {
  return (
    <section className="-mt-32 sm:-mt-32 md:mt-0 lg:mt-0">
      <div className="container mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-32 lg:mx-32">
          <AboutHeBtn
            title="Evtnt's Categories"
            text="Lorem ipsum dolor sit amet consectetur."
          />
          {/*=====================================================*/}
          <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:gap-10 lg:gap-6 pt-0 sm:pt-0 md:pt-8 lg:pt-8">
              {categories.map((categori) => (
                <CategorisImg key={categori.id} categori={categori} />
              ))}
            </div>
          </div>
          {/*=====================================================*/}
        </div>
      </div>
    </section>
  );
};

export default EvenetsCategory;

export function CategorisImg({ categori }) {
  const { image, title, text } = categori;
  return (
    <div className="mb-0 md:mb-20 lg:mb-20 shadow-none md:shadow-xl lg:shadow-xl rounded-xl">
      <div className="py-10">
        <img
          className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover mx-auto"
          src={image}
          alt={title}
        />
        <div className="text-center pt-2 md:pt-6 lg:pt-6">
          <h1 className="text-sm md:text-xl lg:text-lg py-2 md:py-3 lg:py-3">
            {title}
          </h1>
          <p className="text-xs lg:text-xs">{text}</p>
        </div>
      </div>
    </div>
  );
}
