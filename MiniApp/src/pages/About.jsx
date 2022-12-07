import React, { useState } from "react";
import styles from "../assets/css/GlobalModule.module.scss";
import { peter, englo, annca, mascot } from "../assets/img/About";
const About = () => {
  const [team, setTeam] = useState([
    {
      img: peter,
      name: "Peter Tanugraha",
      position: "Cofounder & CEO",
      study: "Computer Engineering @University of Toronto 2019",
      exp: {
        first: "Deep Learning Engineer @IBM Canada (1.5 years)",
        second:
          "Deep Learning Engineer / Software Engineer @Nightingtale.ai Canada (1.5 years)",
      },
    },
    {
      img: englo,
      name: "Michael Englo",
      position: "Cofounder & CTO",
      study: "Computer Science @University of British Columbia 2020",
      exp: {
        first: "Software Engineer @Google Canada (Currently)",
        second: "Software Engineer @Google Sillcon Valley (4 month)",
        third: "Software Engineer @Optimal Efficiency (1.6 years)",
      },
    },
    {
      img: annca,
      name: "Anncarel Sanchiabarca",
      position: "Cofounder & CBO",
      study: "Computing & Information Systems @University of London 2019",
      exp: {
        first: "Software Engineer @Crowde (3 months)",
        second: "CEO @Egglab.id",
      },
    },
  ]);

  return (
    <>
      <div className="flex max-w-[1920px] gap-10 mx-auto mb-auto min-h-screen mt-0 px-4 xl:px-20">
        <div className="overflow-visible w-full p-0 mt-0 flex-[5_1_0%]">
          <div
            className={`${styles.about__header__container} flex flex-col py-24 px-5 items-center md:flex-row lg:p-24`}
          >
            <div className="about__text__wrapper flex flex-col items-center text-center mb-16 md:w-full md:text-center md:items-center md:mb-0 lg:p-24 bg-50%">
              <div className="line__container flex mt-16 mb-4 justify-center">
                <div className="line w-28 h-[4px] inline-flex bg-emas rounded-full"></div>
              </div>
              <h1 className=" font-bold text-white my-0 leading-[56px] text-[40px]">
                Dukung kami dalam menciptakan ekosistem yang inklusif bagi
                programmer di seluruh Indonesia
              </h1>
              <div className="text__about__container w-full flex relative justify-center">
                <div className="text__about__wrapper top-[50px] p-8 absolute bg-[#fefefe] rounded-[10px] shadow-lg md:w-full lg:w-[70%]">
                  <h2 className="mt-0 mb-4 font-medium leading-[42px] text-[32px] text-black">
                    Tentang Kotakode
                  </h2>
                  <p className="text-base font-normal my-0">
                    Kotakode merupakan platform komunitas bagi para pegiat IT di
                    Indonesia dimana programmer dapat belajar dan berbagi
                    wawasan seputar dunia IT terkini untuk mendukung memberikan
                    pertumbuhan perekonomian di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="team__container max-w[90%] mx-auto px-5 py-24 md:w-full">
            <h1 className="font-bold text-black mt-40 mb-24 text-5xl leading-[64px] text-center">
              Tim Kotakode
            </h1>
            {team.map((data, index) => {
              return (
                <div className="flex items-center mx-auto mb-16 flex-col sm:flex-row lg:w-full xl:w-full">
                  <div className="img__container w-40 h-40 inline-flex items-center shrink-0 rounded-[50%] justify-center sm:w-[270px] sm:h-[270px] sm:mr-10 sm:rounded-[1000px]">
                    <img
                      src={data.img}
                      alt="team ava"
                      className="rounded-[50%] object-cover w-full h-full"
                    />
                  </div>
                  <div className="text__container grow text-center sm:mt-0 sm:text-left">
                    <h3 className="font-bold my-0 text-[40px] leading-[56px] ">
                      {data.name}
                    </h3>
                    <h4 className="leading-[32px] text-emas font-medium mt-0 mb-2 text-2xl">
                      {data.position}
                    </h4>
                    <h4 className="text-[rgb(117,117,117)] m-0 text-lg font-bold">
                      {data.study}
                    </h4>
                    <div className="exp__container my-4">
                      {Object.values(data.exp).map((e) => (
                        <p className="text-[rgb(117,117,117)] text-base my-0">
                          • {e}
                        </p>
                      ))}
                    </div>
                    <div className="social__container inline-flex">
                      <a
                        href=""
                        className="text-[rgb(14,82,42)] cursor-pointer text-[25px] mr-2 no-underline transition-all duration-100"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                        </svg>
                      </a>
                      <a
                        href=""
                        className="text-[rgb(14,82,42)] cursor-pointer text-[25px] mr-2 no-underline transition-all duration-100"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${styles.mascot__container}`}>
            <div className="mascot__content flex flex-col p-6 items-center mx-auto sm:flex-row-reverse md:p-16 lg:w-[70%]">
              <div className="mascot__image__container w-40 h-40 inline-flex items-center shrink-0 justify-center sm:w-[20rem] sm:h-[20rem] sm:mr-10 ">
                <img
                  src={mascot}
                  alt="mascot"
                  className="w-[15rem] h-[20rem] mt-16 sm:w-[30rem] sm:h-[20rem] sm:mt-0 sm:ml-16"
                />
              </div>
              <div className="mascot__text__container my-0 mx-auto sm:mt-0 sm:text-left md:max-w-[70%]">
                <h3 className="text-[#fefefe] mt-0 mb-2">Maskot Kotakode</h3>
                <h1 className="text-[#fefefe] mt-0 mb-2">Kucing Robot Koko!</h1>
                <p className="text-[#fefefe] text-base leading-[1.625]">
                  Banyak dari kita yang menyukai kucing, termasuk para
                  programmer. Koko merupakan sebuah robot berbentuk kucing
                  dengan kombinasi warna hijau dan putih. Koko adalah sebuah
                  robot yang fanatik terhadap teknologi, khususnya di bidang IT.
                  Ia datang dari masa depan dan diprogram untuk membantu
                  orang-orang yang memiliki semangat yang sama dengan dirinya.
                  Sama seperti Koko, Kotakode memiliki semangat untuk membantu
                  para fanatik IT di Indonesia untuk mengembangkan ekosistem
                  yang menyenangkan untuk mempelajari hal-hal yang berkaitan
                  dengan dunia IT terkini.
                </p>
              </div>
            </div>
          </div>
          <div className="question__container  max-w-[90%] mx-auto py-24 px-5 md:w-full">
            <h2 className="text-black text-5xl leading-[64px] text-center mt-8 mb-4">
              Punya Pertanyaan Mengenai Kotakode?
            </h2>
            <div className={`${styles.line__container}`}>
              <div className={`${styles.line}`}></div>
            </div>
            <div className="text__container my-0 mx-auto mt-8 sm:mt-0 sm:text-left md:max-w-[70%]">
              <p className=" font-normal mb-0 mt-8  text-lg leading-[24px]">
                Kotakode merupakan platform yang dibuat untuk mengatasi
                permasalahan bagi para pegiat IT di Indonesia. Kami menyadari
                bahwa kami sangat membutuhkan kontribusi pengguna dalam
                membangun Kotakode. Agar setiap fitur, tombol, dan warna yang
                kami buat sesuai dengan kebutuhan pengguna. Oleh karena itu jika
                kamu memiliki pertanyaan, saran, atau tawaran kerjasama yang
                ingin ditanyakan dan diskusikan dengan kami. Silakan hubungi
                kami melalui:
              </p>
              <h2 className="leading-[32px] font-medium text-2xl mt-8 mb-2">
                Kotakode:
              </h2>
              <p className="text-lg leading-[24px]">
                Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,
                Kuningan Timur, Setiabudi, Jakarta Selatan 12950
              </p>
              <h2 className="mt-8 text-2xl font-medium mb-2">Email:</h2>
              <a href="" className="text-primary leading-[24px] text-lg">
                petertanugraha@kotakode.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
