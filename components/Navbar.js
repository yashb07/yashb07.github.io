/* eslint-disable react/jsx-no-undef */
import { IoLogoIonitron } from "react-icons/io";

function navbar() {
  return (
    <nav className="flex items-center justify-between py-10">
      <div className="logo">
        <IoLogoIonitron className="text-8xl"></IoLogoIonitron>
      </div>
      <div className="links hidden md:flex items-center gap-16">
        {/* <a href="#home">Home</a> */}
        <a href="#about">Services</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default navbar;
