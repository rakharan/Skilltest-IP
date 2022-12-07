import React from "react";
import { featureCard1, featureCard2, featureCard3 } from "../assets/img";
import styles from "../assets/css/GlobalModule.module.scss";
import Button from "../components/Button";
const FeatureCard = (props) => {
  const featureData = [
    {
      key: 1,
      src: featureCard1,
      title: "Online Forum",
      description:
        "Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas",
      buttonText: "Tanya Sekarang",
    },
    {
      key: 2,
      src: featureCard2,
      title: "Microblogging",
      description:
        "Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT",
      buttonText: "Tulis Sekarang",
    },
    {
      key: 3,
      src: featureCard3,
      title: "Job Hiring (Coming Soon)",
      description:
        "Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan",
      buttonText: "Cari Kerja",
    },
  ];

  return featureData.map((data, index) => (
    <div
      key={data.key}
      className={`cardContainer flex p-4 md:flex-row lg:w-[50%] ${
        index === 1 ? "lg:mr-[10rem]" : "mr-0"
      } last:grayscale`}
    >
      <div
        className={`${styles.feature__card__content} flex flex-col justify-center h-full items-center rounded-[20px] md:flex-row`}
      >
        <div className="imageContainer flex w-[238px] h-[238px] items-center justify-center md:h-[110px] md:w-[110px] md:border-[4px] border-primary md:-ml-16 rounded-[50%] bg-white">
          <img
            src={data.src}
            alt="icon"
            className="block mt-8 min-w-[110px] md:m-auto md:h-16 md:w-[110px] lg:w-full min-h-full md:rounded-[50%]"
          />
        </div>
        <div className="descContainer text-center md:text-left p-6 pt-0 flex flex-col sm:block ">
          <h1 className="title text-[2em] font-bold text-[#272727] text-2xl text-center mb-0 md:text-left">
            {data.title}
          </h1>
          <p className="desc block text-[#272727] text-sm leading-7 mb-5 ">
            {data.description}
          </p>
          <Button
            className={`items-center bg-emas box-border text-white cursor-pointer inline-flex flex-nowrap font-Quicksand text-base font-bold h-fit justify-center leading-8  min-w-[120px] w-full py-2 px-4 relative antialiased rounded hover:bg-emas/80  ${
              index === 2 ? "grayscale cursor-not-allowed" : ""
            } `}
          >
            {data.buttonText}
          </Button>
        </div>
      </div>
    </div>
  ));
};

export default FeatureCard;
