import React from "react";

function Home() {
  return (
    <div className="relative top-0 md:h-[90vh] h-[80vh] bg-white w-[90%] rounded-b-2xl grid place-items-center overflow-hidden">
      {/* <div className="absolute w-full bg-orange-700 h-full bottom-0"></div> */}
      <div className="w-full flex justify-center items-center px-5 h-full z-10  absolute top-0 ">
        <div className="fixed top-0 flex w-[85%] flex-col justify-center items-center md:items-start h-4/5 md:h-full md:gap-4">
          <p className="heading md:text-[6rem] text-6xl w-full text-center md:text-left tracking-tighter capitalize font-medium mb-8">
            NWOBODO IKENNA
          </p>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text md:mb-3 mb-1">
            <p className="text-base font-medium md:text-4xl text-center md:text-left">
              FRONTEND DEVELOPER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text md:mb-3 mb-1">
            <p className="text-base font-medium md:text-4xl text-center md:text-left">
              GRAPHIC DESIGNER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <div className="flex items-center w-full md:justify-start justify-center gap-3 md:text md:mb-3 mb-1">
            <p className="text-base font-medium md:text-4xl text-center md:text-left">
              PRODUCT DESIGNER
            </p>
            <span className="heading text-5xl md:block hidden">-</span>
          </div>
          <div className="w-full flex justify-center md:justify-start items-center">
            <a
              href="https://drive.google.com/file/d/1BtQGDm0ZY8iNNqBnZM5sCjPGbhEz4PlO/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-black text-sm md:text-base text-white px-4 py-2 border border-black rounded-md mt-6 hover:-translate-y-1 hover:bg-white hover:text-black shadow-2xl"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
