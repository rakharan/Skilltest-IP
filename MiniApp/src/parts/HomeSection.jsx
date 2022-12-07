import React from "react";
import Button from "../components/Button";
import StatsCard from "../components/StatsCard";
import styles from "../assets/css/GlobalModule.module.scss";
const HomeSection = () => {
  return (
    <>
      <div
        className={`${styles.text__area} mb-0 items-center text-center flex flex-col md:w-[100%] md:text-left md:items-start md:mb-0 lg:pr-24 lg:bg-50%`}
      >
        <h1 className="text-center block font-bold text-[32px] sm:text-[32px] sm:leading-[42px] md:text-left lg:text-5xl mb-4 lg:leading-[56px]">
          Jadilah Bagian dari
          <br />
          Komunitas Tech Terbesar
          <br />
          di Indonesia
        </h1>
        <h2 className="block box-border font-normal text-base leading-6 mb-6 ">
          Ikutan diskusi forum tanya jawab, tulis blog dan
          <br />
          Membangun portofolio semua di Kotakode
        </h2>
        <div className="input_area flex flex-row text-center items-center mb-16 md:mb-0 md:text-left gap-4">
          <input
            placeholder="Masukkan Email Kamu"
            type="text"
            className="text-start text-sm border-[1px] indent-0 inline-block border-[#757575] rounded box-border cursor-text  min-h-[50px] px-3 py-[1px] w-[200px] sm:mb-0 focus:outline-none focus:border-[1px] focus:border-emas "
          />
          <Button className=" min-h-[50px] bg-emas rounded underline decoration-transparent hover:decoration-primary hover:bg-emas-light">
            <span className="font-bold text-white">Daftar</span>
          </Button>
        </div>
        <div className="total_stats flex flex-col md:mt-20  md:items-stretch md:flex-row md:justify-start ">
          <StatsCard number="29296" text="User Bergabung" />
          <StatsCard number="1038" text="Blog Ditulis" />
          <StatsCard number="19499">
            Total Pertanyaan
            <br />& Jawaban
          </StatsCard>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
