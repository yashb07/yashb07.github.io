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
            Frontend Developer (Oct 2021 - Present){" "}
          </h3>
          <p className="text-3xl md:text-3xl ">
            I am currently working at Vibencode, a startup that aims to develop
            web solutions using modern web technologies. Initially I worked on
            designs and frontend of certain projects. Currently, I have been a
            part of the core team of developers at a managerial position. This
            includes responsibilites such as handling other frontend interns, as
            well as project management. Throughout my time here, Ive refined my
            skills in React, Next.js, Angular frontend frameworks and mastered
            my design skills using Tailwind, and Sass. I have also developed the
            skill of project management and team handling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
