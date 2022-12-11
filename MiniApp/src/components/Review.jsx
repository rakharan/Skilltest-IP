import React, { useState } from "react";
import { quote, greenQuote } from "../assets/img/Partnership";
const Review = () => {
  const [currentIndex, setCurrentIndex] = useState({
    current: "1",
  });

  const onClickHandler = (index) => {
    setCurrentIndex({ current: index });
  };

  const [dataReview, setDataReview] = useState([
    {
      img: greenQuote,
      name: "Norman Gato",
      job: "Country Manager at Progate Indonesia",
      text: "Finding a great partnership is really hard. Not only it requires commitment to the same goals, but also influence in making it happen internally. We've been working with Kotakode for a few months now and It has been an absolute pleasure.",
    },
    {
      img: greenQuote,
      name: "Jati Arif H",
      job: "Admin & Marketing Supervisor at Refactory.id",
      text: "KotaKode cukup professional dan responsif, bahkan terbuka dengan peluang kerjasama baru dengan Refactory. Kami berharap dapat terus bersinergi dalam memberikan manfaat bagi seluruh pegiat IT khususnya Programmer di Indonesia.",
    },
    {
      img: greenQuote,
      name: "Setyo Purwaningsih",
      job: "Head of Teacher at Timedoor Coding Academy",
      text: "KotaKode adalah platform yang baik untuk berbagi portofolio coding siswa kami, mereka juga bisa berbagi dan saling mengomentari project masing-masing, KotaKode mendukung mereka belajar dan memperluas networking mereka baik dengan sesama programmer newbie ataupun programmer profesional",
    },
  ]);

  const Review = dataReview.map((data, index) => {
    return (
      <div
        id={index}
        className={` quote__box cursor-pointer py-[32px] px-5 transition-all duration-200 ${
          currentIndex.current == index ? "bg-primary text-white" : ""
        }`}
        onClick={(e) => onClickHandler(index)}
      >
        <img
          src={currentIndex.current == index ? quote : data.img}
          alt="green quote"
        />
        <p className="mb-0 mt-10 text-base text-left leading-[24px] min-h-[250px]">
          {data.text}
        </p>
        <p className="mt-4 text-left font-black">{data.name}</p>
        <p className="text-left font-light text-base leading-[20px]">
          {data.job}
        </p>
      </div>
    );
  });

  return Review;
};

export default Review;
