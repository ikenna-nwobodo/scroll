import React from "react";

function Mid() {
  return (
    <div className="bg-black h-[110vh] w-full z-30 text-white grid place-items-center">
      <div className="w-[85%] flex flex-col items-center h-[80vh]">
        <p className="heading md:text-[5rem] text-6xl w-full tracking-tighter capitalize font-medium">
          ABOUT ME
        </p>
        <div className="grid md:grid-cols-3 items-center gap-4 md:gap-8 justify-between w-full md:w-[90%] flex-1 ">
          <div className="h-4/5 bg-white col-span-2 text-black rounded-xl grid place-items-center text-center">
            Some Content.
          </div>
          <div className="flex gap-3 flex-col md:col-span-1 col-span-2 h-4/5">
            <p className="text-xl font-semibold">Work Experience</p>
            <div className="flex-1 bg-white text-black rounded-xl grid place-items-center text-center">
              Some Content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
