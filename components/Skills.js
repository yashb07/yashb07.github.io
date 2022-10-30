import React from "react";
import { FaSass, FaHtml5, FaReact, FaAws, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiBlender } from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-10">Skills</h1>
      <div className="skills flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-14 md:gap-20">
        <div className="skill flex items-center gap-5">
          <SiNextdotjs className="text-5xl md:text-7xl"></SiNextdotjs>
          <h2 className="font-semibold text-4xl">Next JS</h2>
        </div>
        <div className="skill flex items-center gap-5">
          <FaAws className="text-5xl md:text-7xl"></FaAws>
          <h2 className="font-semibold text-4xl">AWS</h2>
        </div>

        <div className="skill flex items-center gap-5">
          <SiTailwindcss className="text-5xl md:text-7xl"></SiTailwindcss>
          <h2 className="font-semibold text-4xl">Tailwind CSS</h2>
        </div>
        <div className="skill flex items-center gap-5">
          <FaReact className="text-5xl md:text-7xl"></FaReact>
          <h2 className="font-semibold text-4xl">React JS</h2>
        </div>
        <div className="skill flex items-center gap-5">
          <FaHtml5 className="text-5xl md:text-7xl"></FaHtml5>
          <h2 className="font-semibold text-4xl">HTML</h2>
        </div>
        <div className="skill flex items-center gap-5">
          <FaSass className="text-5xl md:text-7xl"></FaSass>
          <h2 className="font-semibold text-4xl">Sass</h2>
        </div>
        <hr className="col-span-full" />
        <div className="skill flex items-center gap-5">
          <FaFigma className="text-5xl md:text-7xl"></FaFigma>
          <h2 className="font-semibold text-4xl">Figma</h2>
        </div>
        <div className="skill flex items-center gap-5">
          <SiBlender className="text-5xl md:text-7xl"></SiBlender>
          <h2 className="font-semibold text-4xl">Blender</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
