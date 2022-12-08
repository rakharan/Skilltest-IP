import React, { useState } from "react";
import styles from "../assets/css/GlobalModule.module.scss";
import {
  partnerIllustrate,
  peekingCat,
  socmed,
  expand,
  chatGroup,
  compLogo,
  greenQuote,
  quote,
} from "../assets/img/Partnership";
import Button from "../components/Button";
import Review from "../components/Review";
const Partnership = () => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className="min-h-screen max-w-[1920px] flex px-4 xl:px-20 mx-auto pt-5 mt-0
  "
    >
      <div className="w-full flex-[5_1_0%] overflow-visible min-w-0 mt-6">
        <div className="ATAS py-0 px-5">
          <div className={`header grid w-full ${styles.partnership__header}`}>
            <div className="right__grid px-5 pt-5 pb-[60px]">
              <img
                src={partnerIllustrate}
                alt="illustration partnerhip"
                className="w-full"
              />
            </div>
            <div className="left__grid flex p-5 flex-col pb-[120px] justify-center">
              <span className=" mb-1 text-lg font-bold leading-[24px] ">
                Kotakode Partnership
              </span>
              <h2 className="my-2 font-[900] leading-[51px] text-[40px]">
                Bersama Membangun Talenta Digital di Indonesia
              </h2>
              <span className="font-bold text-lg leading-[24px]">
                Kotakode membuka peluang kolaborasi dengan berbagai institusi
                untuk mendukung ekosistem digital di Indonesia
              </span>
              <Button className="bg-primary rounded-[8px] text-white font-bold leading-[24px] h-[74px] mt-4 min-w-[175px] flex justify-center items-center hover:bg-primary/80">
                Gabung Sekarang
              </Button>
            </div>
          </div>
          <div className="flex items-center flex-col justify-center mt-[60px]">
            <h2 className="text-center text-[40px] font-black leading-[51px] mb-9">
              Mengapa bermitra dengan Kotakode?
            </h2>
            <p className="text-center leading-[20px] my-0 max-width[820px] text-base">
              Bermitra dengan kami dapat berarti apa saja, mulai dari sponsor
              acara sederhana hingga kolaborasi jangka panjang. Bergabung dengan
              Kotakode memberikan manfaat nyata bagi mitra kami.
            </p>
          </div>
          <div className="mt-[86px] max-w-[820px] mx-auto">
            <div className="-mx-4 flex flex-row flex-wrap justify-start">
              <div className="min-h-[1px] relative px-4 w-1/2 flex[0_0_50%] left-auto right-auto max-w-[50%] ml-0">
                <div className=" w-fit flex items-center flex-col justify-center">
                  <img
                    src={socmed}
                    alt="social media"
                    className="w-[64px] m-auto mb-[54px]"
                  />
                  <h2 className="text-lg font-bold leading-[24px] my-0">
                    Jangkau Ribuan Programmer Di Indonesia
                  </h2>
                </div>
                <p>
                  Kotakode adalah tempat tujuan programmer Indonesia. Dengan
                  bekerjasama dengan Kotakode, Anda dapat menjangkau puluhan
                  ribu programmer Indonesia untuk meningkatkan acara Anda
                  berikutnya.
                </p>
              </div>
              <div className="min-h-[1px] relative px-4 w-1/2 flex[0_0_50%] left-auto right-auto max-w-[50%] ml-0">
                <div className=" w-fit flex items-center flex-col justify-center">
                  <img
                    src={expand}
                    alt="social media"
                    className="w-[64px] m-auto mb-[54px]"
                  />
                  <h2 className="text-lg font-bold leading-[24px] my-0">
                    Tingkatkan Kredibilitas Brand Anda
                  </h2>
                </div>
                <p>
                  Kotakode adalah salah satu pemimpin di bidang teknologi
                  Indonesia. Ketika Anda menjadi partner kami, brand Anda akan
                  secara otomatis dipercayai oleh komunitas tech di Indonesia.
                </p>
              </div>
            </div>
          </div>
          <div className="partnership__type">
            <h2 className="text-center text-[40px] font-black leading-[51px] mb-10 mt-[164px]">
              Tipe Partnership
            </h2>
            <div
              className={`gap-x-8 w-full m-auto grid grid-cols-1 gap-y-5 sm:grid-cols-2 text-center max-w-[504px]`}
            >
              <div className="border-[1.985px] border-emas border-t-8 pt-10 px-6 pb-[18px] rounded flex items-center flex-col justify-center">
                <img src={chatGroup} alt="chat group" />
                <h2 className="font-bold text-lg leading-[24px] mt-4">
                  Community Partner
                </h2>
                <p className="text-center text-base leading-[20px] mt-4 mb-0">
                  Kotakode berkolaborasi dengan Bootcamp IT, KOMINFO, serta
                  Institusi Pendidikan untuk memfasilitasi murid dalam proses
                  belajar pemrograman.
                </p>
                <Button className="mt-4 text-primary font-bold">
                  GABUNG SEKARANG
                </Button>
              </div>
              <div className="border-[1.985px] border-emas border-t-8 pt-10 px-6 pb-[18px] rounded flex items-center flex-col justify-center">
                <img src={chatGroup} alt="chat group" />
                <h2 className="font-bold text-lg leading-[24px] mt-4">
                  Community Partner
                </h2>
                <p className="text-center text-base leading-[20px] mt-4 mb-0">
                  Kotakode berkolaborasi dengan Bootcamp IT, KOMINFO, serta
                  Institusi Pendidikan untuk memfasilitasi murid dalam proses
                  belajar pemrograman.
                </p>
                <Button className="mt-4 text-primary font-bold">
                  GABUNG SEKARANG
                </Button>
              </div>
            </div>
          </div>
          <div className="community__list flex flex-col items-center justify-center mt-[180px]">
            <h2 className="text-center text-[40px] font-black leading-[51px] mb-[52px]">
              Community Partner
            </h2>
            <p className="text-base text-center leading-[20px] mb-[50px] max-w-[820px]">
              Kotakode berkolaborasi dengan Perusahaan Online IT Training,
              Pemerintah, Institusi Pendidikan, organisasi non-profit untuk
              memfasilitasi murid dalam belajar pemrograman.
            </p>
            <img
              src={compLogo}
              alt="community list"
              className="w-full md:w-[75%]"
            />
          </div>
          <div className="mt-[212px] flex flex-col justify-center">
            <h2 className="text-center text-[40px] font-black leading-[51px] mb-[72px]">
              Apa yang orang katakan
            </h2>
            <div className="three__columns grid w-full m-auto grid-cols-1 sm:grid-cols-3 max-w-[1100px]">
              <Review />
            </div>
          </div>
        </div>
        <div className="BAWAH mt-[132px] flex items-center flex-col justify-center left-[50%] right-[50%] w-screen overflow-hidden relative -ml-[50vw] -mr-[50vw]">
          <div className="absolute mx-6 pt-[120px]">
            <h2 className="text-[#fefefe] text-center text-[40px] font-black leading-[51px]">
              Tertarik untuk bergabung?
            </h2>
            <p className="text-[#fefefe] text-center text-[16px] leading-[188%] mt-3 max-w-[625px]">
              Tiap harinya, kami selalu memberikan yang terbaik untuk pengguna
              setia Kotakode. Mulai dari Aplikasi, Teknologi, dan Komunitas.
              Bergabunglah bersama kami untuk menyediakan ekosistem IT terbaik
              untuk anak bangsa.
            </p>
            <div className="flex items-center flex-col justify-center mt-2 ">
              <Button className="bg-primary rounded-[8px] text-white font-bold leading-[24px] h-[74px] mt-4 min-w-[175px] flex justify-center items-center hover:bg-primary/80">
                GABUNG SEKARANG
              </Button>
            </div>
          </div>
          <img
            src={peekingCat}
            alt="peeking cat footer background"
            className="max-h-[700px] object-contain -mb-[10px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
