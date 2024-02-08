import React, { useEffect, useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("false");
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const showMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed flex flex-col top-0 mt-6 z-50 ${
          show && "hide"
        } shadow-xl min-h-nax text-black bg-gray-100/30 backdrop-blur-2xl md:py-5 py-3 px-5 border border-black/10 w-[85%] rounded-xl`}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-bold uppercase">IKENNA</p>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              About me
            </a>
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </div>
          {menu ? (
            <span
              class="material-symbols-rounded md:hidden block cursor-pointer"
              onClick={showMenu}
            >
              menu
            </span>
          ) : (
            <span
              class="material-symbols-rounded md:hidden block cursor-pointer"
              onClick={showMenu}
            >
              close
            </span>
          )}
        </div>
        {!menu && (
          <div className="flex flex-col items-end mt-4 w-full gap-6">
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              About me
            </a>
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-xs font-bold uppercase hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
