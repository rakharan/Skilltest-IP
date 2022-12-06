import React from "react";
import styles from "../assets/css/GlobalModule.module.scss";
import { kucingWhySatu, kucingWhyDua, kucingWhyTiga } from "../assets/img";
import FeatureCard from "../components/FeatureCard";
const WhySection = () => {
  return (
    <>
      <div className="whyContainer bg-primary/60 flex items-center flex-col rounded-[25px] p-8 md:flex md:flex-row-reverse md:items-start shadow-why">
        <div className="headerContainer text-center md:w-[30%] lg:h-[100%] lg:flex lg:flex-col lg:justify-between antialiased">
          <h1
            className="headerTitle text-center block text-[32px]
           font-bold mb-6 mt-0 antialiased text-white md:text-left xl:text-5xl"
          >
            Mengapa perlu menggunakan Kotakode?
          </h1>
          <p
            className={`${styles.header__description} block text-[15px] leading-7 mr-auto text-center antialiased mb-8 text-white md:text-left md:text-xl`}
          >
            Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
            memberikan fasilitas guna mensejahterakan kehidupan penduduknya.
          </p>
        </div>
        <div className="contentContainer w-[70%] flex flex-col lg:h-full lg:flex-row">
          <div className="leftContent flex flex-1 justify-between flex-col antialiased ">
            <div
              className={`${styles.content__card} flex flex-col mx-auto sm:px-8 sm:py-4 mb-10 sm:flex-row sm:mr-10 items-center antialiased sm:bg-white rounded-[25px] sm:shadow-why`}
            >
              <div className="imageContainer inline-flex items-center shrink-0 justify-center w-40 h-40 sm:w-20 sm:h-20">
                <img
                  className="w-40 h-40 sm:w-20 sm:h-20"
                  src={kucingWhySatu}
                  alt="icon"
                />
              </div>
              <div className="textContainer grow text-center sm:mt-0 sm:text-left ml-8 antialiased">
                <h3 className="block font-bold text-white sm:text-[#263238] text-lg mb-2 mt-[2em] md:text-[#263238] md:text-xl md:mt-0">
                  Jawaban cepat, tepat & gratis
                </h3>
                <p className="block my-[14px] antialiased text-base text-white sm:text-sm sm:text-[#263238]">
                  Dapatkan jawaban dalam hitungan menit dari ribuan programmer
                  lainnya.
                </p>
              </div>
            </div>
            <div
              className={`${styles.content__card} flex flex-col mx-auto sm:px-8 sm:py-4 mb-10 sm:flex-row sm:mr-10 items-center antialiased sm:bg-white rounded-[25px] sm:shadow-why`}
            >
              <div className="imageContainer inline-flex items-center shrink-0 justify-center w-40 h-40 sm:w-20 sm:h-20">
                <img
                  className="w-40 h-40 sm:w-20 sm:h-20"
                  src={kucingWhyDua}
                  alt="icon"
                />
              </div>
              <div className="textContainer grow text-center sm:mt-0 sm:text-left ml-8 antialiased">
                <h3 className="block font-bold text-white sm:text-[#263238] text-lg mb-2 mt-[2em] md:text-[#263238] md:text-xl md:mt-0">
                  Konsep Gamifikasi
                </h3>
                <p className="block my-[14px] antialiased text-base text-white sm:text-sm sm:text-[#263238]">
                  Dapatkan badge menarik yang akan meningkatkan personal
                  branding kamu sebagai seorang programmer.
                </p>
              </div>
            </div>
          </div>
          <div className={`rightContent flex flex-1 flex-col antialiased`}>
            <div
              className={`${styles.content__card} topImage flex flex-col items-center mx-auto mb-10 sm:py-4 sm:px-8 sm:bg-white sm:shadow-why sm:rounded-[25px] sm:mr-10 sm:flex-row lg:grow lg:flex-col`}
            >
              <div className="imageContainer inline-flex w-40 h-40 items-center shrink-0 justify-center sm:w-20 sm:h-20 lg:w-40 lg:h-40 lg:mb-8">
                <img
                  className="w-40 h-40 sm:w-20 sm:h-20 lg:w-40 lg:h-40"
                  src={kucingWhyTiga}
                  alt="icon"
                />
              </div>
              <div className="text-container grow text-center sm:mt-0 sm:text-left sm:ml-8 lg:text-center lg:ml-0">
                <h1 className="block text-[2em] mt-8 mb-2 text-white font-semibold sm:text-[#263238] md:text-xl md:mt-0 md:text-[#263238] ">
                  Bangun Online Portofolio
                </h1>
                <p className="block my-[1em] text-base text-white leading-7 sm:text-[#263238] sm:text-sm md:text-[#263238]">
                  Portofolio ibaratkan sebuah aset yang berharga bagi setiap
                  orang. Semakin kamu aktif di dalam forum, semakin membuktikan
                  bahwa kamu adalah programmer yang berkualitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__container flex mt-8 items-center flex-col md:mt-24 md:flex-row">
        <div
          className={`${styles.feature__left} w-full flex items-center flex-col md:w-1/2 md:items-start`}
        >
          <h1 className="text-primary-text text-[30px] text-center mb-8 md:text-left lg:text-5xl">
            Satu Platform,
            <br />
            Banyak Solusi
          </h1>
          <p className="text-primary-text text-[15px] text-center leading-[1.625] mr-auto mb-8 md:text-lg md:text-left md:pr-20 lg:text-xl">
            Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik
            dan terbaik untuk mengembangkan ekosistem IT anak bangsa.
          </p>
        </div>
        <div className="feature__right -mr-4 flex flex-wrap justify-center md:w-1/2 md:flex-col lg:items-end">
          <FeatureCard />
        </div>
      </div>
    </>
  );
};

export default WhySection;
