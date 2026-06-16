import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import LeftPanel from "./LeftPanel";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-[35%] lg:sticky lg:top-0 lg:h-screen bg-[#F2EEE6] border-r border-[#E3DED2]">
        <LeftPanel />
      </aside>

      <main className="w-full lg:w-[65%] bg-[#F8F7F2]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;