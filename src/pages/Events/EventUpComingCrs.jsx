import React from "react";
import GridImg1 from "../../assets/course_img/event-1.jpg";
import GridImg2 from "../../assets/course_img/event-2.jpg";
import GridImg3 from "../../assets/course_img/event-3.jpg";
import GridImg4 from "../../assets/course_img/event-4.jpg";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import EventsSingleCours from "./EventsSingleCours";

const images = [GridImg1, GridImg2, GridImg3, GridImg4];

const EventUpComingCrs = () => {
  return (
    <section className="bg-[#F4F4F4] pt-10 sm:pt-10 md:py-20 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-4 sm:mx-4 md:mx-32 lg:mx-32">
          <AboutHeBtn
            title="Our Upcomming Courses"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error provident optio ut."
          />
          {/*=================== Grid Start ==============================*/}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-10">
            {/*=================== Grid 01 ===============================*/}
            {images.map((img, key) => (
              <EventsSingleCours key={key} image={img} />
            ))}
            {/*=================== Grid 02 ===============================*/}

            {/*=================== Grid 04 End ===========================*/}
          </div>
          {/*=================== Grid End ================================*/}
        </div>
      </div>
    </section>
  );
};

export default EventUpComingCrs;
