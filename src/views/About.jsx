import React from "react";

function Mid() {
  return (
    <div className="md:min-h-[110vh] bg-black relative md:pb-20 w-full z-30 text-white grid place-items-center">
      <div className="w-[85%] py-20 flex flex-col gap-10 items-center md:min-h-[80vh] h-max">
        <p className="heading md:text-[5rem] text-6xl w-full tracking-tighter capitalize font-medium">
          ABOUT ME
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center md:items-center lg:items-start gap-10">
          <div className="min-h-max h-full w-full lg:w-5/12 overflow-hidden p-5 bg-gradient-to-tr md:bg-gradient-to-bl from-transparent via-black to-[#013451]  text-white rounded-xl grid place-items-center text-center">
            <p className="lg:w-8/12 bg-red-600 text-sm md:text-lg md:tracking-wide md:leading-9 leading-7">
              I am a versatile professional with expertise in web development,
              UI/UX design & graphic design. With a strong foundation in modern
              web technologies I create responsive and interactive websites that
              prioritize user experience and SEO. I also design visually
              captivating user interfaces, marketing materials, and social media
              graphics.
            </p>
          </div>
          {/* bg-gradient-to-br from-transparent via-black to-[#013451] */}
          <div className="flex gap-3 flex-col w-full lg:w-max">
            <p className="text-xl font-semibold">Work Experience</p>
            <div className="flex-1 bg-gradient-to-bl md:bg-gradient-to-tr from-transparent via-black to-[#013451]  text-white rounded-xl flex flex-col items-center gap-8 py-8 text-center">
              <div className="w-11/12 text-left py-2 px-4 border-l-4 border-[#013451]">
                <span className="text-[12px] font-bold tracking-wide text-opacity-20">
                  December 2022 - Present
                </span>
                <p className="heading text-4xl">Software Developer</p>
                <p className="text-sm font-semibold">R3 Consulting Ltd</p>
              </div>
              <div className="w-11/12 text-left py-2 px-4 border-l-4 border-[#5e1e1e]">
                <span className="text-[12px] font-bold tracking-wide text-opacity-20">
                  January 2021 - June 2021
                </span>
                <p className="heading text-4xl">Software Developer Intern</p>
                <p className="text-sm font-semibold">United Bank for Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// grid bg-yellow-500 md:grid-cols-3 items-center gap-4 md:gap-8 justify-between w-full md:w-[90%] flex-1

export default Mid;
