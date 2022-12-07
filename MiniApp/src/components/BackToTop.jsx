import React from "react";
import { useState } from "react";
const BackToTop = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      onClick={scrollTop}
      className={` ${
        visible ? "mb-10" : " -mb-[60px]"
      } fixed bottom-0 right-6  z-[1000] box-border transition-all duration-300`}
    >
      <button className="bg-primary hover:bg-primary-light rounded items-center box-border text-white text-sm font-bold h-[42px] justify-center min-w-[24px] px-4 py-2 relative text-center inline-flex">
        <div className="box-border inline-flex text-sm text-white font-bold -ml-[5px] mr-[14px]">
          <div className="inline-flex box-border text-sm font-bold -mr-[2px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="18px"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 4H18V6H6zM6.707 15.707L11 11.414 11 20 13 20 13 11.414 17.293 15.707 18.707 14.293 12 7.586 5.293 14.293z" />
            </svg>
          </div>
        </div>
        {props.text}
      </button>
    </div>
  );
};

export default BackToTop;
