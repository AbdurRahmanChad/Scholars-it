import React from "react";
import Liveimg from "../../assets/home_img/online-img.png";
import Offlineimg from "../../assets/home_img/offline-img.png";
import Recordimg from "../../assets/home_img/record-img.png";
import LiveClassBtn from "../ReUsedComponent/LiveClassBtn";
const liveclass = [
  {
    id: 1,
    image: Liveimg,
    title: "Live Class",
    text: "77 Courses",
  },
  {
    id: 2,
    image: Offlineimg,
    title: "Online Class",
    text: "77 Courses",
  },
  {
    id: 3,
    image: Recordimg,
    title: "Record Class",
    text: "77 Courses",
  },
];
const ButtonHome = () => {
  return (
    <section className="my-20 w-full">
      <div className="container mx-auto">
        <div className="mx-10 sm:mx-10 md:mx-56 lg:mx-56">
          <div className="grid grid-cols-3 gap-10 sm:gap-10 md:gap-10 lg:gap-0">
            {liveclass.map((item) => (
              <div key={item.id}>
                <LiveClassBtn
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonHome;
