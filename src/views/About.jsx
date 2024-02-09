import React from "react";

function Mid() {
  return (
    <div className="bg-black h-[110vh] w-full z-30 text-white grid place-items-center">
      <div className="w-[85%] flex flex-col items-center h-[80vh]">
        <p className="heading md:text-[5rem] text-6xl w-full tracking-tighter capitalize font-medium">
          ABOUT ME
        </p>
        <div className="grid md:grid-cols-3 items-center gap-4 md:gap-8 justify-between w-full md:w-[90%] flex-1 ">
          <div className="h-4/5 min-h-max p-5 bg-gradient-to-bl from-transparent via-black to-[#013451] col-span-2 text-white rounded-xl grid place-items-center text-center">
            <p className="lg:w-8/12 text-sm md:text-lg tracking-wide leading-5 md:leading-9">
              I am a versatile professional with expertise in web development,
              UI/UX design & graphic design. With a strong foundation in modern
              web technologies I create responsive and interactive websites that
              prioritize user experience and SEO. I also design visually
              captivating user interfaces, marketing materials, and social media
              graphics.
            </p>
          </div>
          <div className="flex gap-3 flex-col md:col-span-1 col-span-2 h-4/5">
            <p className="text-xl font-semibold">Work Experience</p>
            <div className="flex-1 bg-gradient-to-tr from-transparent via-black to-[#013451] text-white rounded-xl flex flex-col items-center gap-8 py-8 text-center">
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

export default Mid;
