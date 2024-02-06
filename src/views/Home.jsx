import React from "react";

function Home() {
  return (
    <div className="relative top-0 h-[90vh] bg-white w-[90%] rounded-b-2xl grid place-items-center overflow-hidden">
      <div className="w-full px-5 h-4/5 absolute bottom-0 grid place-items-center">
        <div className="fixed bottom-0 flex w-[85%] flex-col justify-center items-start h-full md:gap-4">
          <p className="heading md:text-[6rem] text-3xl text-center tracking-tighter capitalize font-medium mb-8">
            NWOBODO IKENNA
          </p>
          <div className="flex items-center gap-3 text mb-3">
            <p className="text-4xl">FRONTEND DEVELOPER</p>
            <span className="heading text-5xl">-</span>
          </div>
          <div className="flex items-center gap-3 text mb-3">
            <p className="text-4xl">GRAPHIC DESIGNER</p>
            <span className="heading text-5xl">-</span>
          </div>
          <div className="flex items-center gap-3 text">
            <p className="text-4xl">PRODUCT DESIGNER</p>
            <span className="heading text-5xl">-</span>
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
