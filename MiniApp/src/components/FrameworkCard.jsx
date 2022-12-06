import React from "react";

import {
  android,
  bootstrap,
  codeIgniter,
  css,
  firebase,
  gitlab,
  html,
  java,
  javascript,
  jquery,
  kotlin,
  nodejs,
  python,
  php,
  react,
  mysql,
  swift,
} from "../assets/img";
const FrameworkCard = () => {
  const frameworkData = [
    {
      key: 1,
      img: android,
      text: "Android",
    },
    {
      key: 2,
      img: bootstrap,
      text: "Bootstrap",
    },
    {
      key: 3,
      img: codeIgniter,
      text: "Code Igniter",
    },
    {
      key: 4,
      img: css,
      text: "CSS",
    },
    {
      key: 5,
      img: firebase,
      text: "Firebase",
    },
    {
      key: 6,
      img: gitlab,
      text: "Git",
    },
    {
      key: 8,
      img: html,
      text: "HTML",
    },
    {
      key: 9,
      img: java,
      text: "Java",
    },
    {
      key: 10,
      img: javascript,
      text: "Javascript",
    },
    {
      key: 11,
      img: jquery,
      text: "Jquery",
    },
    {
      key: 12,
      img: kotlin,
      text: "Kotlin",
    },
    {
      key: 13,
      img: nodejs,
      text: "Node JS",
    },
    {
      key: 14,
      img: python,
      text: "Python",
    },
    {
      key: 15,
      img: php,
      text: "PHP",
    },
    {
      key: 16,
      img: react,
      text: "React JS",
    },
    {
      key: 17,
      img: mysql,
      text: "SQL",
    },
    {
      key: 18,
      img: swift,
      text: "Swift",
    },
  ];

  const framework = frameworkData.map((data, key) => (
    <div key={key} className="cardContainer w-24 m-2">
      <div className="card w-full border-2 border-primary rounded-lg">
        <img
          src={data.img}
          alt="framework"
          className=" w-16 h-[100px] flex mx-auto"
        />
      </div>
      <p className="frameworkTitle text-center">{data.text}</p>
    </div>
  ));
  return framework;
};

export default FrameworkCard;
