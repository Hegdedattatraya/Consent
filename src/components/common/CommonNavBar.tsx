import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


const CommonNavBar = () => {
  const { pathname } = useLocation();
  const isRegisterPage = pathname.toLowerCase() === "/register";
  const isResetPage = pathname.toLowerCase() === "/reset";
  const isLoginPage = pathname.toLowerCase() === "/login";
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex justify-between items-center bg-primary px-4 py-2 text-white font-bold border-b border-gray-600 md:px-20 md:border-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <img src="\images\logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full" />
          <Link to="/" className="ml-2">Zophy Solutions</Link>
        </div>
        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="hidden md:flex gap-4">
        {!isResetPage && (
          <>
            {!isLoginPage && (
              <Link
                to="/login"
                className="flex items-center gap-1 px-4 py-2 border border-gray-500 rounded hover:bg-primaryHover"
              >
                <UserOutlined /> Login
              </Link>
            )}
            {!isRegisterPage && (
              <Link
                to="/register"
                className="flex items-center gap-1 px-4 py-2 border border-gray-500 rounded hover:bg-primaryHover"
              >
                <UserAddOutlined /> Register
              </Link>
            )}
          </>
        )}
      </div>
      <div className="md:hidden" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <FaBars size={25} /> : <RxCross1 size={25} />}
      </div>
      {!collapsed && (
        <div className="absolute top-16 left-0 w-full bg-primary text-white z-50">
          <div className="p-4">
            <Link to="/" className="block py-2 text-center">Home</Link>
            <Link to="/about" className="block py-2 text-center">About Us</Link>
            <Link to="/contact" className="block py-2 text-center">Contact Us</Link>
            <Link to="/login" className="block py-2 text-center">Login</Link>
            <Link to="/register" className="block py-2 text-center">Register</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonNavBar;
