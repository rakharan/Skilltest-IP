import React from "react";
import ReactDOM from "react-dom";
import { logo, burgerMenu } from "../assets/img";
import Button from "../components/Button";
import DesktopMenu from "../components/DesktopMenu";
import {
  navLinkData1,
  navLinkData2,
  navLinkData3,
} from "../mobilenavbar/NavlinkData";
import Navlink from "../mobilenavbar/Navlink";
import styles from "../assets/css/GlobalModule.module.scss";
import { Link } from "react-router-dom";

const MobileNavbar = (props) => {
  return (
    <div
      className={` ${styles.mobile__menu}  ${
        props.mobileNavbar ? " opacity-100 visible scale-100" : ""
      }
     mobileNavbar bg-white rounded text-center min-w-[200px] min-h-[40px] z-20 top-[60px] overflow-hidden right-0`}
    >
      <div className="overflow-y-scroll max-h-[80vh] ">
        <nav className=" antialiased ">
          <div className="py-2 overflow-hidden antialiased box-border divide-y-2">
            <div>
              <h2 className="navTitle text-xs font-semibold mt-2 leading-4 ml-4 text-left">
                Navigasi
              </h2>
              <Navlink mobileNavbar={props.mobileNavbar} data={navLinkData1} />
            </div>
            <div>
              <h2 className="navTitle text-xs font-semibold mt-2 text-left leading-4 ml-4">
                Produk
              </h2>
              <Navlink mobileNavbar={props.mobileNavbar} data={navLinkData2} />
            </div>
            <div>
              <h2 className="navTitle text-xs font-semibold mt-2 text-left leading-4 ml-4">
                Login
              </h2>
              <Navlink mobileNavbar={props.mobileNavbar} data={navLinkData3} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const Navbar = (props) => {
  return (
    <>
      <div className="navbar__container sticky top-0 z-10 w-full h-[65px]">
        <div className="navbar w-full flex flex-col bg-white">
          <div className="box-border items-center max-w-[1920px] w-full h-[64px] px-4 flex xl:px-20">
            <div className="bar w-full flex flex-row justify-between gap-10 py-[5px] px-0 items-center">
              <Link
                to="/"
                className="navbar__logo flex cursor-pointer items-center flex-[1_1_0%]"
              >
                <img src={logo} width={"120px"} alt="navbar logo" />
              </Link>
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
                  <Button className="bg-primary hover:bg-primary-light text-white">
                    Daftar
                  </Button>
                </div>
              </div>
              <div className="mobileMenu lg:hidden">
                <button
                  className={`items-center min-w-max py-2 px-4 ${
                    props.mobileNavbar
                      ? "bg-primary rounded text-white"
                      : "bg-white"
                  } `}
                >
                  <div className="flex min-w-[20px] min-h-[20px] text-center ">
                    <img
                      src={burgerMenu}
                      alt="icon"
                      className={`${
                        props.mobileNavbar ? "invert" : "invert-0"
                      }`}
                      onClick={() => {
                        props.setMobileNavbar(!props.mobileNavbar);
                      }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="border-emas border-t-[3px]"></div>
        </div>
      </div>
      <>
        {props.mobileNavbar ? (
          ReactDOM.createPortal(
            <MobileNavbar mobileNavbar={props.mobileNavbar} />,
            document.getElementById("portal-root")
          )
        ) : (
          <div></div>
        )}
      </>
    </>
  );
};

export default Navbar;
