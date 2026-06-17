import { useState } from "react";
import "./App.css" ;
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DnsManagement from "./components/projects/DnsManagement";
import ContainerHosting from "./components/projects/ContainerHosting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/dns-management-platform"
            element={<DnsManagement />}
          />
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
