import React, { useEffect, useState } from "react";
import projects from "../data/projectlist";
import transition from "../transition";
import { Link } from "react-router-dom";

function ProjectPage() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="text-white w-[85%] overflow-hidden h-screen">
      <div className="relative">
        <div className="flex items-center gap-6 justify-center mb-3 mt-8">
          <Link
            to={"/"}
            className="btn-i px-4 text-xs py-2 border border-white flex gap-2 items-center w-max"
          >
            <i class="fa-solid fa-arrow-left"></i>
            Back
          </Link>
          <p className="heading md:text-6xl text-6xl w-full tracking-tighter capitalize font-medium">
            Projects
          </p>
        </div>
        <div className="bg-gradient-to-b from-transparent to-black w-full h-[25%] absolute z-40 bottom-0"></div>
        <div className="relative">
          <div
            className={`bg-gradient-to-t from-transparent to-black w-full h-[10%] absolute z-40 top-0 ${
              show && "hidden"
            }`}
          ></div>
          <div className="relative top-0 h-[100vh] pb-40 overflow-auto">
            <div className="projects flex justify-center items-center mb-[10vh] h-fit flex-col gap-8 md:gap-20">
              {projects.map((project) => {
                return (
                  <div
                    className={`project project-1 flex flex-col md:flex-row gap-4 md:gap-8 w-full relative ${
                      projects.lastIndexOf(project) + 1 === 1 && "z-50"
                    }`}
                  >
                    <p
                      className={`text-[4rem] md:text-[8rem] heading leading-tight `}
                    >
                      {projects.lastIndexOf(project) + 1}.
                    </p>
                    <div className="md:flex w-full justify-between items-center md:gap-14">
                      <Link
                        to={project.link}
                        target="_blank"
                        className="flex-1 shadow-xl flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl md:shadow-sm bg-transparent relative overflow-hidden"
                      >
                        <div
                          className={`absolute ${project.bg} h-full w-full`}
                        ></div>
                        <img
                          src={project.image}
                          alt=""
                          className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
                        />
                      </Link>
                      <div className="relative mt-4 h-5/6 md:mt-0 w-full md:w-5/12 flex flex-col gap-2 md:gap-6">
                        <p className="text-3xl md:text-[4rem] font-medium tracking-tighter head">
                          {project.title}
                        </p>
                        <div className="text-xs flex gap-4 text-black md:mt-2">
                          {project.stack.map((tech) => {
                            return (
                              <span className="bg-white px-2 py-0.5 rounded-full">
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                        <p className="text-sm tracking-wide md:mt-0 mt-3 text-center md:text-left">
                          {project.description}
                        </p>
                        <div className="md:absolute bottom-0 mt-6 md:mt-0 flex justify-center md:justify-start gap-6 items-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-white text-black text-sm font-medium px-6 py-2 md:py-3 gap-2 rounded-lg flex items-center md:hover:-translate-y-1"
                          >
                            Live Preview
                            <span class="material-symbols-rounded text-[14px]">
                              open_in_new
                            </span>
                          </a>
                          <a
                            href={project.git}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="md:hover:-translate-y-1"
                          >
                            <i class="fa-brands fa-github text-2xl md:text-3xl"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(ProjectPage);
