import React from "react";

function Footer() {
  return (
    <div className="text-black p-4 z-30 relative flex flex-col gap-4 justify-center items-center h-[20vh] bg-white w-[90%] rounded-t-2xl">
      <p className="heading md:text-[5rem] text-center text-6xl w-full tracking-tighter capitalize font-medium mb-8">
        Contact Me.
      </p>
      <div className="flex w-10/12 md:w-5/12 justify-between">
        <a href="/" target="_blank">
          <img
            src={require("../assets/images/logos/Mail.png")}
            alt="Mail"
            className="w-[30px] md:w-[50px]"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={require("../assets/images/logos/Behance.png")}
            alt="Mail"
            className="w-[30px] md:w-[50px]"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={require("../assets/images/logos/git.png")}
            alt="Mail"
            className="w-[30px] md:w-[50px]"
          />
        </a>
        <a href="/" target="_blank">
          <img
            src={require("../assets/images/logos/linkedin.png")}
            alt="Mail"
            className="w-[30px] md:w-[50px]"
          />
        </a>
      </div>
      <div className="px-3 flex w-full justify-between absolute bottom-0">
        <p className="courier-prime-bold text-black/80">ikenna</p>
        <p className="cute-font-regular">&copy; 2024</p>
      </div>
    </div>
  );
}

export default Footer;
