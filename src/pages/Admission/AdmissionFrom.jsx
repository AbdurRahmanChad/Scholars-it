import React from "react";
import AboutHeBtn from "../../Componenet/ReUsedComponent/AboutHeBtn";
import StudentsInfo from "./Studentsinfo/StudentsInfo";
import CourseInfo from "./Studentsinfo/CourseInfo";
import PaymentInfo from "./Studentsinfo/paymentInfo";
import WebDevelopm from "./Others/WebDevelopm";
import NeedHelp from "./Others/NeedHelp";
import WhenAndWhay from "./Others/WhenAndWhay";

const AdmissionFrom = () => {
  const sutudentData = (data) => console.log(data);

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto">
        <div className="pt-6 py-0 md:py-20 lg:py-20 mx-6 sm:mx-6 md:mx-10 lg:mx-28">
          <AboutHeBtn
            title="Admission Form"
            text="Lorem ipsum dolor sit amet consectetur."
          />
          <div className="py-4 sm:py-4 md:py-10 lg:py-10">
            <div className="container mx-auto">
              <div className="flex flex-col-reverse sm:flex-row lg:justify-between gap-6">
                <div className="flex-[1] min-h-full rounded-lg">
                  {/*============================== Part 01 Start ============================*/}
                  <WebDevelopm />
                  {/*========================= Scholars-it Lab Section start =================*/}
                  <WhenAndWhay />
                  {/*========================= Need help Start ===============================*/}
                  <NeedHelp />
                </div>
                {/*=========================Right Side Part Start ============================*/}
                <div className="flex-[2] min-h-full bg-transparent">
                  {/*==============================Students Info  start=======================*/}
                  <StudentsInfo sutudentData={sutudentData} />
                  {/*========================= Course Info Start =============================*/}
                  <CourseInfo />
                  {/*==========================Payment Info Start ============================*/}
                  <PaymentInfo />
                </div>
                {/*========================= Right Side Part End =============================*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionFrom;
