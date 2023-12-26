import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenet/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Courses from "./pages/Courses/Courses";
import Events from "./pages/Events/Events";
import Community from "./pages/Community/Community";
import Admission from "./pages/Admission/Admission";
import SignIn from "./pages/SignIn/SignIn";
import ScrollToTop from "react-scroll-to-top";
import SignUp from "./pages/SignIn/SignUp";
import Seminars from "./pages/Seminars/Seminars";
import Footer from "./Componenet/Home/Footer";

function app() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/Community" element={<Community />}></Route>
          <Route path="/Admission" element={<Admission />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Seminars" element={<Seminars />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="hidden lg:block">
        <ScrollToTop
          smooth
          style={{
            background: "rgb(10, 207, 10)",
            borderRadius: "100%",
            height: 45,
            width: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        />
      </div>
    </>
  );
}

export default app;
