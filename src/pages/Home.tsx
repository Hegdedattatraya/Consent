import React from "react";
import { Link } from "react-router-dom";
import { CommonNavBar } from "../components/common";
import Footer from "../components/common/Footer";
import MainHomeIcon from "../assets/svg/MainHomeIcon";

const Home = () => {
  return (
    <div>
      <CommonNavBar />
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
        <div className="w-full lg:w-1/2 flex justify-center">
          <MainHomeIcon />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
          <h1 className="text-4xl font-bold text-primary">Simplify Your Doctor Visits</h1>
          <p className="text-lg mt-4">
            Book appointments easily with qualified doctors in your area. Enjoy hassle-free and efficient healthcare at your fingertips.
          </p>
          <Link to="/appointment" className="mt-6 px-8 py-4 bg-btnColor text-secondary rounded-full hover:bg-btnHoverColor">
            Schedule an Appointment
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
