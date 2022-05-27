/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import homepageImage from "../../assets/homepage-image.png";

import React from "react";

function Home() {
  return (
    <div className="flex md:flex-col-reverse lg:flex-row md:items-start md:gap-20 lg:gap-0 lg:items-center justify-between">
      <div className="home-content flex flex-col flex-wrap gap-10 md:gap-5">
        <h1 className="text-7xl md:text-9xl">
          I'm{" "}
          <span className="font-semibold text-7xl md:text-9xl">
            Yash Belsare
          </span>
        </h1>
        <h3 className="text-4xl md:text-7xl w-5/6 leading-relaxed">
          Front end developer, Mobile developer, student.{" "}
        </h3>
      </div>
      <div className="home-image hidden md:block w-[50rem] h-[50rem]">
        <Image src={homepageImage} alt="yash" />
      </div>
    </div>
  );
}

export default Home;
