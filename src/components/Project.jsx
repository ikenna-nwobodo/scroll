import React from "react";

function Project() {
  return (
    <div className="project-1 flex flex-col md:flex-row gap-4 md:gap-8 w-full relative">
      <p className="text-[4rem] md:text-[8rem] heading leading-tight">1.</p>
      <div className="md:flex md:gap-14">
        <div className="flex-1 flex justify-center items-center h-[25vh] md:h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
          <div className="absolute home h-full w-full"></div>
          <img
            src={require("../assets/images/rn.png")}
            alt=""
            className="md:absolute z-30 md:left-40 rounded-2xl shadow-2xl w-[270px] md:w-[500px]"
          />
        </div>
        <div className="relative mt-4 md:mt-0 w-full md:w-5/12 flex flex-col gap-4 md:gap-8">
          <p className="text-3xl md:text-[4rem] font-medium tracking-tighter head">
            Project 1
          </p>
          <p className="text-sm tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
  );
}

export default Project;
