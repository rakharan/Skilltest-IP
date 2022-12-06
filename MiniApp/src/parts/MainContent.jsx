import React from "react";
import { telegram } from "../assets/img";
import HomeSection from "./HomeSection";
import WhySection from "./WhySection";
import styles from "../assets/css/GlobalModule.module.scss";
import Button from "../components/Button";
import FrameworkCard from "../components/FrameworkCard";
import LiputanList from "../components/LiputanList";
const MainContent = () => {
  return (
    <div className="mt-0 pt-0 min-h-screen mx-auto mb-auto gap-10 px-0 max-w-full flex">
      <div className="px-0 py-0 overflow-visible flex-[5_1_0%] w-full">
        <div className="home__container flex flex-col py-24 px-5 items-center md:flex-row lg:p-24">
          <HomeSection />
        </div>
        <div className="why__container py-24 px-5 lg:px-24">
          <WhySection />
        </div>
        <div
          className={`${styles.community__container} flex items-center mx-auto mb-16 flex-col rounded-[10px] mt-24 pt-12 sm:pt-8 sm:flex-col lg:w-full lg:mx-0 lg:pt-44 xl:w-full`}
        >
          <div className="image__container w-[100px] h-auto mx-0 sm:w-40 lg:w-[200px] lg:ml-4">
            <img
              src={telegram}
              alt="telegram icon"
              className="w-[100px] sm:w-40 lg:w-[200px]"
            />
          </div>
          <div className="textContainer grow text-center sm:mt-0">
            <h1 className="communityTitle block text-[30px] text-center font-bold">
              Gabung Komunitas Telegram Kotakode
            </h1>
            <p className="communityDesc text-base text-center leading-7 sm:text-lg ">
              Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
              bersama mencapai tujuan yang besar
            </p>
            <div className="flex justify-center items-center min-h-[32px]">
              <Button className=" bg-emas text-white font-bold underline decoration-transparent hover:decoration-primary hover:bg-emas/70">
                <span>Ikutan Telegram!</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="tech__container py-24 px-5 lg:px-24">
          <div className="framework__container flex items-center flex-col">
            <h1 className="text-primary-text text-[30px] text-center mx-auto py-8 lg:w-[60%] lg:text-5xl">
              Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di
              Seluruh Indonesia
            </h1>
            <p className="text-primary-text text-lg mt-[0.875ren] text-center leading-[38px] mb-8 lg:text-xl">
              Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan
              Contoh Pengembangan Proyek
            </p>
            <div className="logo__container flex flex-wrap mx-auto justify-center">
              <FrameworkCard />
            </div>
            <Button className="bg-emas items-center text-white border-[1px] box-border inline-flex justify-center leading-8 flex-nowrap text-base font-bold h-[50px] text-center hover:bg-emas/70 underline decoration-transparent hover:decoration-primary">
              Ajukan Pertanyaan
            </Button>
          </div>
        </div>
        <div className="partner__container px-5 pb-16 lg:px-24">
          <h1 className="text-primary-text text-center text-[30px] mx-auto my-8 lg:w-[60%] lg:text-5xl ">
            Diliput Oleh
          </h1>
          <div className="liputan__container flex gap-[25px] flex-wrap mx-auto px-8 justify-around md:mt-20 md:px-0">
            <LiputanList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
