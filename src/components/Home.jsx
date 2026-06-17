import React from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import LeftPanel from "./LeftPanel";
import Footer from "./Sections/Footer";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-[35%] lg:sticky lg:top-0 lg:h-screen bg-[#F2EEE6] border-r border-[#E3DED2]">
        <LeftPanel />
      </aside>

      <main className="w-full lg:w-[65%] bg-[#F8F7F2]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </div>
  );
};

export default Home;