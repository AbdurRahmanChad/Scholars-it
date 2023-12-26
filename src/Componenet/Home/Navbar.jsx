import React from "react";
import { useState } from "react";
import ScholarsLogo from "../../assets/home_img/logo.png";
import { NavLink } from "react-router-dom";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toogleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <section className="bg-white ">
      <header className="w-full h-full">
        <nav className="w-full mx-auto px-10 sm:px-10 md:px-28 lg:px-28 z-30 fixed shadow-md bg-white">
          <div className="w-full flex justify-between items-center py-2">
            {/*==========Logo===================================*/}
            <div className="w-14 sm:w-14 md:20 lg:w-20 cursor-pointer">
              <NavLink to="/">
                <img src={ScholarsLogo} alt="ScholarsLogo" />
              </NavLink>
            </div>
            {/*==========Logo End===============================*/}
            <div className="lg:flex justify-between items-center  hidden">
              {/*==========Menu Start=============================*/}
              <ul className="flex justify-between items-center gap-6">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-tMd"
                        : "text-tMd navLinkBtnHobr text-gray-500"
                    }
                    to="/Courses"
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-tMd"
                        : "text-tMd navLinkBtnHobr text-gray-500"
                    }
                    to="/Events"
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-tMd"
                        : "text-tMd navLinkBtnHobr text-gray-500"
                    }
                    to="/Community"
                  >
                    Community
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-tMd"
                        : "text-tMd navLinkBtnHobr text-gray-500"
                    }
                    to="/AboutUs"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-tMd"
                        : "text-tMd navLinkBtnHobr text-gray-500"
                    }
                    to="/Admission"
                  >
                    Admission
                  </NavLink>
                </li>
              </ul>
              <div className="ml-12 lg:block hidden">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "signBtn" : "signBtn"
                  }
                  to="/SignIn"
                >
                  <button className="">Sign In</button>
                </NavLink>
              </div>
            </div>
            {/*==========Menu End===============================*/}
            {/*========== Mobile Button Start===========================*/}
            <button onClick={toogleMenu} className="lg:hidden text-2xl">
              {isMenu ? <HiX /> : <HiMenu />}
            </button>
            {/*==========Mobile Button End=============================*/}
          </div>
          {/*==========Mobile Button Menu Start =============================*/}
          {isMenu && (
            <div className="bg-white py-4">
              <ul className="flex flex-col gap-2">
                <li className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-sm"
                        : "text-sm navLinkBtnHobr"
                    }
                    to="/Courses"
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-sm"
                        : "text-sm navLinkBtnHobr"
                    }
                    to="/Events"
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-sm"
                        : "text-sm navLinkBtnHobr"
                    }
                    to="/Community"
                  >
                    Community
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-sm"
                        : "text-sm navLinkBtnHobr"
                    }
                    to="/AboutUs"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 text-sm"
                        : "text-sm navLinkBtnHobr"
                    }
                    to="/Admission"
                  >
                    Admission
                  </NavLink>
                </li>
              </ul>
              <div className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "signBtn" : "signBtn"
                  }
                  to="/SignIn"
                >
                  <button className="pt-6 sm:pt-6 md:pt-8 lg:pt-8">
                    Sign In
                  </button>
                </NavLink>
              </div>
            </div>
          )}
          {/*==========Mobile Button Menu end =============================*/}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
