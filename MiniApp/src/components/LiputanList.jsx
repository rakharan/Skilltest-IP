import React from "react";
import { dailySocial, liputan6, yahoo, cnn, merdeka } from "../assets/img";

const LiputanList = () => {
  const partners = [
    {
      key: 1,
      img: dailySocial,
      imgWidth: "160px",
    },
    {
      key: 2,
      img: liputan6,
      imgWidth: "160px",
    },
    {
      key: 3,
      img: yahoo,
      imgWidth: "160px",
    },
    {
      key: 4,
      img: cnn,
      imgWidth: "75px",
    },
    {
      key: 5,
      img: merdeka,
      imgWidth: "160px",
    },
  ];

  const partnership = partners.map((data, key) => (
    <a key={key} href="#">
      <img width={data.imgWidth} src={data.img} alt="icon" />
    </a>
  ));
  return partnership;
};

export default LiputanList;
