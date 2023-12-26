import React from "react";
import { useNavigate } from "react-router-dom";

export default function JoinSeminarBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="fixed top-[40%] -right-[66px] md:-right-[66px] lg:-right-[72px] z-30"
        onClick={() => navigate("/seminars")}
      >
        <button className="px-4 py-2 text-sm sm:text-sm md:text-sm lg:text-[15px] bg-green-600 text-white rounded-md duration-300 -rotate-90">
          Join Free Seminar
        </button>
      </div>
    </div>
  );
}
