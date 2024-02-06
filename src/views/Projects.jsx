import React from "react";

function Projects() {
  return (
    <div className="bg-black min-h-[110vh] h-max w-full z-30 text-white grid place-items-center">
      <div className="w-[85%] flex flex-col gap-10 items-center min-h-[80vh] h-max mb-[10vh]">
        <p className="heading md:text-[5rem] text-3xl w-full tracking-tighter capitalize font-medium mb-8">
          Projects
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 w-full">
            <p className="text-[8rem] heading">1.</p>
            <div className="flex-1 flex justify-center items-center h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
              <div className="home h-full w-full"></div>
              <img
                src={require("../assets/images/rn.png")}
                alt=""
                width={500}
                className="absolute left-40 rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative w-5/12 flex flex-col gap-4">
              <p className="text-[4rem] font-medium tracking-tighter head">
                Project 1
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="absolute bottom-0 flex gap-6 items-center">
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
          <div className="flex gap-8 w-full">
            <p className="text-[8rem] heading">2.</p>
            <div className="flex-1 flex justify-center items-center h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
              <div className="ferr h-full w-full"></div>
              <img
                src={require("../assets/images/sx.png")}
                alt=""
                width={500}
                className="absolute left-40 rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative w-5/12 flex flex-col gap-4">
              <p className="text-[4rem] font-medium tracking-tighter head">
                Project 1
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="absolute bottom-0 flex gap-6 items-center">
                <button className="bg-white text-black text-sm font-medium px-6 py-3 gap-2 rounded-lg flex items-center hover:-translate-y-1">
                  Live Preview
                  <span class="material-symbols-rounded text-[14px]">
                    open_in_new
                  </span>
                </button>
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
          <div className="flex gap-8 w-full">
            <p className="text-[8rem] heading">3.</p>
            <div className="flex-1 flex justify-center items-center h-[40vh] rounded-2xl shadow-sm bg-white relative overflow-hidden">
              <div className="def h-full w-full"></div>
              <img
                src={require("../assets/images/mt.png")}
                alt=""
                width={500}
                className="absolute left-40 rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative w-5/12 flex flex-col gap-4">
              <p className="text-[4rem] font-medium tracking-tighter head">
                Project 1
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="absolute bottom-0 flex gap-6 items-center">
                <button className="bg-white text-black text-sm font-medium px-6 py-3 gap-2 rounded-lg flex items-center hover:-translate-y-1">
                  Live Preview
                  <span class="material-symbols-rounded text-[14px]">
                    open_in_new
                  </span>
                </button>
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
  );
}

export default Projects;
