import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-primary text-white px-4 py-2 md:px-20">
      <div>© 2024 Zophy Solutions LLP</div>
      <div className="flex gap-4">
        <CgFacebook size={20} />
        <BsTwitterX size={20} />
        <FaLinkedinIn size={20} />
        <TiSocialInstagram size={20} />
      </div>
    </footer>
  );
};

export default Footer;
