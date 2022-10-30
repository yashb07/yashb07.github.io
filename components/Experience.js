import React from "react";

import { GoLinkExternal } from "react-icons/go";

function Experience() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-10">Experience</h1>
      <div className="experiences flex flex-col gap-10">
        <div className="experience flex flex-col gap-5">
          <a
            href="https://www.vibencode.com/"
            target="_blank"
            className="flex items-center gap-5 font-semibold text-5xl md:text-6xl transition-all"
            rel="noreferrer"
          >
            Vibencode{" "}
            <GoLinkExternal className="text-4xl md:text-5xl"></GoLinkExternal>
          </a>
          <h3 className="font-semibold text-3xl md:text-4xl">
            Frontend Developer (Oct 2021 - June 2022){" "}
          </h3>
          <p className="text-3xl md:text-3xl">
            I have had <b className="text-3xl md:text-3xl">10 months</b> of
            professional experience working as a{" "}
            <b className="text-3xl md:text-3xl">frontend developer</b> at at
            Vibencode pvt. ltd., an innovative startup aimed at creating only
            the best web applications for {"it's"} clients using latest
            technologies. Initially, I worked on designing the websites and
            making them responsive. Later as I got promoted to the core team of
            developers, I had the responsibility of{" "}
            <b className="text-3xl md:text-3xl">managing projects</b> as well as
            the frontend teams and interns. Throughout my time here, {"I've"}{" "}
            refined my skills in React JS, Next JS, Angular and mastered my web
            design skills using Tailwind CSS, and Sass.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
