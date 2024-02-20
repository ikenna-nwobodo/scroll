import React from "react";

function Home() {
  return (
    <div className="relative top-0 md:h-[90vh] h-[80vh] bg-white w-[90%] rounded-b-2xl grid place-items-center overflow-hidden">
      <div className="absolute w-full  h-full bottom-0"></div>
      <div className="w-full px-5 h-full z-10 landing absolute top-0 grid place-items-center">
        <div className="fixed top-0 flex w-[85%] flex-col justify-center items-center md:items-start h-4/5 md:h-full md:gap-4">
          <p className="heading md:text-[6rem] text-6xl w-full text-center md:text-left tracking-tighter capitalize font-medium mb-8">
            NWOBODO IKENNA
          </p>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text mb-3">
            <p className="text-xl md:text-4xl text-center md:text-left">
              FRONTEND DEVELOPER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text mb-3">
            <p className="text-xl md:text-4xl text-center md:text-left">
              GRAPHIC DESIGNER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text mb-3">
            <p className="text-xl md:text-4xl text-center md:text-left">
              PRODUCT DESIGNER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <button className="bg-black text-white px-4 py-2 border border-black rounded-md mt-6 hover:-translate-y-1 hover:bg-white hover:text-black shadow-2xl">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
