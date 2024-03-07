import React from "react";
import projects from "../data/projectlist";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";

function Projects() {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.utils.toArray(".project").forEach((project, i) => {
  //     ScrollTrigger.create({
  //       trigger: project,
  //       start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //       snap: 1,
  //     });
  //     gsap.from(project.children, {
  //       y: 50,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: project,
  //         start: "top center",
  //         end: "bottom bottom",
  //         toggleActions: "play none reverse reset",
  //       },
  //     });
  //   });
  // });

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.utils.toArray(".projects").forEach((project) => {
  //     ScrollTrigger.create({
  //       trigger: project,
  //       start: "top bottom",
  //     });
  //     gsap.from(project.children, {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: project,
  //         start: "top bottom",
  //         end: "bottom bottom",
  //         toggleActions: "play none reverse reset",
  //       },
  //     });
  //   });

  //   // gsap.from(".project", {
  //   //   scrollTrigger: ".project",
  //   //   opacity: 0,
  //   // });
  // });
  return (
    <div className="md:min-h-[110vh] bg-black relative md:pb-20 w-full z-30 text-white grid place-items-center">
      <div className="w-[85%] md:py-40 py-20 flex flex-col items-center md:min-h-[80vh] h-max md:mb-[10vh]">
        <p className="heading md:text-[5rem] text-6xl w-full tracking-tighter capitalize font-medium mb-8">
          Projects
        </p>
        <div className="project-container flex flex-col justify-center items-center gap-4">
          <div className="projects flex justify-center items-center h-fit flex-col gap-8 md:gap-20">
            {projects.slice(0, 3).map((project) => {
              return (
                <div className="project project-1 flex flex-col md:flex-row gap-4 md:gap-8 w-full relative">
                  <p className="text-[4rem] md:text-[8rem] heading leading-tight">
                    {projects.lastIndexOf(project) + 1}.
                  </p>
                  <div className="md:flex w-full justify-between items-center md:gap-14">
                    <div className="flex-1 shadow-xl flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl md:shadow-sm bg-transparent relative overflow-hidden">
                      <div
                        className={`absolute ${project.bg} h-full w-full`}
                      ></div>
                      <img
                        src={project.image}
                        alt=""
                        className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
                      />
                    </div>
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
          <Link
            to="projects"
            className="px-5 py-3 border mt-10 border-white text-sm hover:bg-white text-white hover:text-black"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
