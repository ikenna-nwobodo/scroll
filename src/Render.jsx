import React from "react";
import Footer from "./views/Footer";
import Home from "./views/Home";
import Mid from "./views/About";
import Navbar from "./components/Navbar";
import Projects from "./views/Projects";
import transition from "./transition";

function Render() {
  return (
    <>
      <Navbar />
      <Home />
      <Mid />
      <Projects />
      <Footer />
    </>
  );
}

export default transition(Render);
