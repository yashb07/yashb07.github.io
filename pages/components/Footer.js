import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0 justify-between py-10">
      <div className="footer-links flex items-center gap-10">
        <a
          href="https://www.linkedin.com/in/yash-belsare/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a href="https://github.com/yashb07" target="_blank" rel="noreferrer">
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/yashb__07/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-4xl" />
        </a>
      </div>
      <div className="footer-links flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-20">
        <a
          href="mailto:yashrbelsare@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-3xl font-semibold">yashrbelsare@gmail.com</span>
        </a>
        <span className="text-3xl font-semibold">+91 7777052391</span>
      </div>
    </div>
  );
}

export default Footer;
