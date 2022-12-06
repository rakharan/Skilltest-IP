import React from "react";
import styles from "../assets/css/GlobalModule.module.scss";
const StatsCard = (props) => {
  return (
    <div
      className={`${styles.stats__card} bg-[#FEE6D8] w-full py-[10px] px-5 text-center rounded-[25px] mb-8 md:w-auto md:mr-8 md:mb-0`}
    >
      <h1 className="statsNumber font-bold text-[32px] block text-center leading-none m-0">
        {props.number}
      </h1>
      <p className="statsTitle block text-xs text-center">
        {props.text || props.children}
      </p>
    </div>
  );
};

export default StatsCard;
