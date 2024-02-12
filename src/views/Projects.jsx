import React from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useGSAP } from "@gsap/react";

function Projects() {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".project-container",
  //       pin: ".project-container",
  //       top: "top top",
  //       end: "bottom bottom",
  //       marker: true,
  //     },
  //   });
  //   tl.from(".project-1", { xPercent: 100 });
  // });

  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".project-container",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     markers: true,
  //     pin: ".projects",
  //     anticipatePin: 1,
  //   },
  // });

  // tl.from(".project-1", { xPercent: -100 })
  //   .from(".project-2", { xPercent: 100 })
  //   .from(".project-3", { yPercent: -100 });

  return (
    <div className="min-h-[110vh] bg-black relative pb-20 w-full z-30 text-white grid place-items-center">
      <div className="project-container w-[85%] py-40 flex flex-col gap-10 items-center min-h-[80vh] h-max mb-[10vh]">
        <p className="heading md:text-[5rem] text-6xl w-full tracking-tighter capitalize font-medium mb-8">
          Projects
        </p>
        <div className="projects flex flex-col gap-8 md:gap-20">
          <div className="project-1 flex flex-col md:flex-row gap-4 md:gap-8 w-full relative">
            <p className="text-[4rem] md:text-[8rem] heading leading-tight">
              1.
            </p>
            <div className="md:flex md:gap-14">
              <div className="flex-1 flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
                <div className="absolute home h-full w-full"></div>
                <img
                  src={require("../assets/images/rn.png")}
                  alt=""
                  className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
                />
              </div>
              <div className="relative mt-4 md:mt-0 w-full md:w-5/12 flex flex-col gap-4 md:gap-6">
                <p className="text-3xl md:text-[4rem] font-medium tracking-tighter head">
                  Project 1
                </p>
                <div className="text-xs flex gap-4 text-black mt-2">
                  <span className="bg-white px-2 py-0.5 rounded-full">
                    React
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-full">
                    GSAP
                  </span>
                </div>
                <p className="text-sm tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="md:absolute bottom-0 flex justify-center md:justify-start gap-6 items-center">
                  <a
                    href="/"
                    className="bg-white text-black text-sm font-medium px-6 py-3 gap-2 rounded-lg flex items-center hover:-translate-y-1"
                  >
                    Live Preview
                    <span class="material-symbols-rounded text-[14px]">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:-translate-y-1"
                  >
                    <i class="fa-brands fa-github text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-2 flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <p className="text-[4rem] md:text-[8rem] heading leading-tight">
              2.
            </p>
            <div className="md:flex md:gap-14">
              <div className="flex-1 flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
                <div className="absolute ferr h-full w-full"></div>
                <img
                  src={require("../assets/images/sx.png")}
                  alt=""
                  className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
                />
              </div>
              <div className="relative mt-4 md:mt-0 w-full md:w-5/12 flex flex-col gap-4 md:gap-8">
                <p className="text-3xl md:text-[4rem] font-medium tracking-tighter head">
                  Project 2
                </p>
                <p className="text-sm tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="md:absolute bottom-0 flex justify-center md:justify-start gap-6 items-center">
                  <a
                    href="/"
                    className="bg-white text-black text-sm font-medium px-6 py-3 gap-2 rounded-lg flex items-center hover:-translate-y-1"
                  >
                    Live Preview
                    <span class="material-symbols-rounded text-[14px]">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:-translate-y-1"
                  >
                    <i class="fa-brands fa-github text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-3 flex flex-col md:flex-row gap-4 md:gap-8 w-full">
            <p className="text-[4rem] md:text-[8rem] heading leading-tight">
              3.
            </p>
            <div className="md:flex md:gap-14">
              <div className="flex-1 flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
                <div className="absolute def h-full w-full"></div>
                <img
                  src={require("../assets/images/mt.png")}
                  alt=""
                  className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
                />
              </div>
              <div className="relative mt-4 md:mt-0 w-full md:w-5/12 flex flex-col gap-4 md:gap-8">
                <p className="text-3xl md:text-[4rem] font-medium tracking-tighter head">
                  Project 3
                </p>
                <p className="text-sm tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="md:absolute bottom-0 flex justify-center md:justify-start gap-6 items-center">
                  <a
                    href="/"
                    className="bg-white text-black text-sm font-medium px-6 py-3 gap-2 rounded-lg flex items-center hover:-translate-y-1"
                  >
                    Live Preview
                    <span class="material-symbols-rounded text-[14px]">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:-translate-y-1"
                  >
                    <i class="fa-brands fa-github text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="px-5 py-3 border border-white text-sm hover:bg-white text-white hover:text-black">
        See More
      </button>
      {/* <div className="bg-gradient-to-b from-transparent via-black to-black from w-full absolute grid place-items-center bottom-0 h-[27vh] z-50">
        <button className="px-5 py-3 border border-white text-sm hover:bg-white text-white hover:text-black">
          See More
        </button>
      </div> */}
    </div>
  );
}

export default Projects;
