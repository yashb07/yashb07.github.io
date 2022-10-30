import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import Footer from "./components/Footer";

import About from "./components/About";

import Skills from "./components/Skills";

import Experience from "./components/Experience";

import Projects from "./components/Projects";

import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="main-container flex flex-col justify-center items-center">
      <div className="main-container-width flex flex-col w-4/5 gap-40 lg:gap-0">
        <section
          id="home"
          className="homepage-section flex flex-col justify-around md:justify-between h-screen"
        >
          <Navbar />
          <Homepage />
          <Footer />
        </section>
        <section
          id="about"
          className="homepage-section flex flex-col justify-center lg:h-screen gap-32"
        >
          <About />
          <Skills />
        </section>
        <section
          id="experience"
          className="homepage-section flex flex-col justify-around lg:h-screen gap-32"
        >
          <Experience />
          <Projects />
        </section>
        <section
          id="contact"
          className="homepage-section flex flex-col justify-around lg:h-screen"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
