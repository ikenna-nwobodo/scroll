import React from "react";

function Home() {
  return (
    <div className="relative top-0 h-[90vh] bg-white w-[90%] rounded-b-2xl grid place-items-center overflow-hidden">
      <div className="w-full px-5 h-4/5 absolute bottom-0 grid place-items-center">
        <div className="fixed bottom-0 flex flex-col justify-center items-center h-full gap-6 md:gap-4">
          <p className="md:text-5xl text-3xl text-center font-semibold w-10/12 md:w-7/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="text-sm text-center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.{" "}
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
