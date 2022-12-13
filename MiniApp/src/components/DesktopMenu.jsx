import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const DesktopMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavLink
        to="/about"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 
        }`}
      >
        Tentang
      </NavLink>
      <NavLink
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        to="/pertanyaan"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 hover:bg-primary hover:text-white }`}
      >
        Produk
        {isHovered ? (
          <>
            <ul className="absolute top-10 bg-white text min-w-[200px] text-black shadow-lg rounded-lg p-2">
              <NavLink to="/pertanyaan">
                <li className="hover:bg-primary/50 rounded p-2 flex flex-col leading-normal">
                  <span>Forum Q&A</span>
                  <span className="text-xs font-normal">
                    Pertanyaan & Jawaban
                  </span>
                </li>
              </NavLink>
              <NavLink to="/blogs">
                <li className="hover:bg-primary/50 rounded p-2 flex flex-col leading-normal">
                  <span>Blog</span>
                  <span className="text-xs font-normal">
                    Diskusi & Informasi
                  </span>
                </li>
              </NavLink>
              <NavLink to="/jobs">
                <li className="hover:bg-primary/50 rounded p-2 flex flex-col leading-normal">
                  <span>Jobs</span>
                  <span className="text-xs font-normal">Cari Kerja</span>
                </li>
              </NavLink>
            </ul>
          </>
        ) : (
          <></>
        )}
      </NavLink>
      <NavLink
        to="/faq"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 
        }`}
      >
        FAQ
      </NavLink>
      <NavLink
        to="/events"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 
        }`}
      >
        Events
      </NavLink>
      <NavLink
        to="/partnership"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 
        }`}
      >
        Partnership
      </NavLink>
      <NavLink
        to="/pokemon"
        className={`relative text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 
        }`}
      >
        Pokemon
      </NavLink>
    </>
  );
};

export default DesktopMenu;
