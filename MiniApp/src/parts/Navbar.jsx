import React from "react";
import { logo } from "../assets/img";
import Button from "../components/Button";
import DesktopMenu from "../components/DesktopMenu";
const Navbar = () => {
  return (
    <div className="navbar__container sticky top-0 z-10 w-full h-[65px]">
      <div className="navbar w-full flex flex-col bg-white">
        <div className="items-center max-w-[1920pc] w-full h-[64px] px-4 flex xl:px-20">
          <div className="bar w-full flex flex-row justify-between gap-10 py-[5px] px-0 items-center">
            <a
              href="#"
              className="navbar__logo flex cursor-pointer items-center flex-[1_1_0%]"
            >
              <img src={logo} width={"120px"} alt="navbar logo" />
            </a>
            <div className="desktop__menu hidden lg:flex lg:flex-[4_1_0%]">
              <DesktopMenu />
            </div>
            <div className="desktop__menu__button hidden lg:flex flex-row justify-end flex-[2_1_0%]">
              <div className="flex items-center flex-nowrap gap-y-2 gap-x-4">
                <Button
                  className="border-[1px] border-primary text-primary 
                hover:bg-primary-light hover:text-white
                hover:border-transparent
                "
                >
                  Masuk
                </Button>
                <Button className="bg-primary text-putih hover:bg-primary-light text-white">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-emas border-t-[3px]"></div>
      </div>
    </div>
  );
};

export default Navbar;
