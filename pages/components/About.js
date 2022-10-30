import { FaDev } from "react-icons/fa";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import { FaAws } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-7xl font-extrabold mb-10">What I do?</h1>
      <div className="about-cards flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-20">
        <div className="about-card w-full lg:w-9/10">
          <FaDev className="text-7xl" />
          <h2 className="font-semibold text-5xl">Front End Development</h2>
          <p className="text-3xl">
            I can build frontend web applications using React JS, Next JS, and
            Angular.
          </p>
        </div>
        <div className="about-card w-full lg:w-9/10">
          <FaAws className="text-7xl" />
          <h2 className="font-semibold text-5xl">Cloud App Development</h2>
          <p className="text-3xl">
            I can build and deploy cloud based web applications using AWS
          </p>
        </div>
        <div className="about-card w-full lg:w-9/10">
          <MdDesignServices className="text-7xl" />
          <h2 className="font-semibold text-5xl">UI Building</h2>
          <p className="text-3xl">
            I can convert your Figma designs into beautiful websites using
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
