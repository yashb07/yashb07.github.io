import { FaDev } from "react-icons/fa";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";

function About() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-7xl font-extrabold mb-10">What I do?</h1>
      <div className="about-cards flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-20">
        <div className="about-card w-full lg:w-9/10">
          <FaDev className="text-7xl" />
          <h2 className="font-semibold text-5xl">Front End Development</h2>
          <p className="text-3xl">
            I build frontend web applications using React, Next, and Angular. I
            also work with Tailwind and Sass for design.
          </p>
        </div>
        <div className="about-card w-full lg:w-9/10">
          <MdDesignServices className="text-7xl" />
          <h2 className="font-semibold text-5xl">Website Design</h2>
          <p className="text-3xl">
            I can develop your website using Sass and Tailwind CSS for a clean
            web experience using your Figma/Photoshop designs.
          </p>
        </div>
        <div className="about-card w-full lg:w-9/10">
          <MdDeveloperMode className="text-7xl" />
          <h2 className="font-semibold text-5xl">Mobile App Development</h2>
          <p className="text-3xl">
            I can develop basic mobile applications using Flutter, Android
            Studio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
