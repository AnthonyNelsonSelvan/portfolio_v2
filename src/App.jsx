import { useState } from "react";
import "./App.css" ;
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DnsManagement from "./components/projects/DnsManagement";
import ContainerHosting from "./components/projects/ContainerHosting";
import ProjectCaseStudy from "./components/projects/ProjectCaseStudy";
import ScrollToTop from "./components/feature/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={<ProjectCaseStudy />} />
          <Route
            path="/projects/container-hosting"
            element={<ContainerHosting />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
