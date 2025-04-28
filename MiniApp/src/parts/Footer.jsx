import React from "react";
import { NavLink } from "react-router-dom";
import { block71, google } from "../assets/img";
import { linkedin, instagram, twitter, facebook } from "../assets/img";
import BackToTop from "../components/BackToTop";
const Footer = () => {
  const contact = [
    {
      id: 1,
      img: linkedin,
      href: "https://www.linkedin.com/",
    },
    {
      id: 2,
      img: instagram,
      href: "https://www.instagram.com/",
    },
    {
      id: 3,
      img: twitter,
      href: "#",
    },
    {
      id: 4,
      img: facebook,
      href: "https://web.facebook.com/",
    },
  ];
  const contactList = contact.map((data) => (
    <a
      key={data.id}
      href={data.href}
      target="_blank"
      className="cursor-pointer text-xl pr-2"
    >
      <img className="min-w-[24px]" src={data.img} alt="icon" />
    </a>
  ));
  const footerLink1 = [
    {
      id: 1,
      href: "/pertanyaan",
      text: "Pertanyaan",
    },
    {
      id: 2,
      href: "/blogs",
      text: "Blog",
    },
    {
      id: 3,
      href: "/users",
      text: "Pengguna",
    },
    {
      id: 4,
      href: "/events",
      text: "Events",
    },
    {
      id: 5,
      href: "/partnership",
      text: "Partnership",
    },
  ];

  const footerLink2 = [
    {
      id: 1,
      href: "/about",
      text: "About",
    },
    {
      id: 2,
      href: "/faq",
      text: "FAQ",
    },
    {
      id: 3,
      href: "/rules",
      text: "Rules",
    },
    {
      id: 4,
      href: "/legal",
      text: "Legal",
    },
  ];

  const footerLinkList1 = footerLink1.map((data) => (
    <li key={data.id} className="pt-[10px]">
      <NavLink
        to={data.href}
        className={({ active }) => (active ? "" : "text-[#848D95]")}
      >
        {data.text}
      </NavLink>
    </li>
  ));

  const footerLinkList2 = footerLink2.map((data) => (
    <li key={data.id} className="pt-[10px]">
      <NavLink
        to={data.href}
        className={({ active }) => (active ? "" : "text-[#848D95]")}
      >
        {data.text}
      </NavLink>
    </li>
  ));

  return (
    <footer className="bg-[#1E2228]">
      <div className="flex flex-wrap py-8 px-5 mx-auto pt-16 flex-col md:flex-row md:justify-around lg:items-start">
        <div className="footerNavContainer flex flex-wrap justify-between mt-10 -mb-10 text-center md:mt-0 md:text-center md:pl-4 lg:text-left">
          <div className="w-full px-4 md:w-full lg:w-[50%]">
            <h2 className="font-bold text-white text-sm mb-3 uppercase">
              Bagian Dari:
            </h2>
            <nav className="navDetail mb-10 list-none">
              <div className="partnerContainer ">
                <ul className="flex flex-col items-center lg:flex-row">
                  <li>
                    <a href="#">
                      <img className="min-w-[106px]" src={block71} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="googleContainer w-[200px] flex p-1 bg-white mt-8 lg:mt-0 lg:ml-8">
                        <img
                          width={"200px"}
                          src={google}
                          alt="google for startups logo"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="footerNavContainer flex flex-wrap justify-between mt-10 -mb-10 text-center md:mt-0 md:text-center md:pl-4 lg:text-left">
          <div className=" w-full px-4 md:w-full lg:w-[50%] text-center lg:text-left ">
            <h2 className="font-bold text-white text-sm uppercase mb-3">
              PRODUK
            </h2>
            <nav className="navDetail mb-10 list-none">
              <ul>{footerLinkList1}</ul>
            </nav>
          </div>
        </div>
        <div className="footerNavContainer flex flex-wrap justify-between mt-10 -mb-10 text-center md:mt-0 md:text-center md:pl-4 lg:text-left">
          <div className="w-full px-4 md:w-full lg:w-[50%]">
            <h2 className="font-bold text-white uppercase text-sm mb-3">
              PERUSAHAAN
            </h2>
            <nav className="navDetail mb-10 list-none">
              <ul>{footerLinkList2}</ul>
            </nav>
          </div>
        </div>
        <div className="footerNavContainer flex flex-wrap justify-between mt-10 -mb-10 text-center md:mt-0 md:text-center md:pl-4 lg:text-left">
          <div className="w-full px-4 md:w-full">
            <h2 className="font-bold text-white text-sm mb-3 uppercase">
              Hubungi Kami
            </h2>
            <nav className="navDetail mb-10 list-none">
              <ul>
                <li className="footerLink pt-[10px]">
                  <a href="#" className="text-white">
                    saga@sagameda.com
                  </a>
                </li>
              </ul>
              <span className="iconContainer text-white inline-flex mt-[10px] pr-2 justify-center">
                <ul className="iconContainer text-white inline-flex mt-[10px] pr-2 justify-center">
                  {contactList}
                </ul>
              </span>
            </nav>
          </div>
        </div>
      </div>
      <div className="credit text-[#fefefe] flex items-center flex-col pb-5 justify-center">
        <p>PT. Kota Digital Nusantara</p>
        <p>Copyright 2020 Kotakode. All rights reserved</p>
        <p>Cloned with ❤️ in 🇮🇩 by Sagameda</p>
      </div>
      <BackToTop text="Kembali ke Atas" />
    </footer>
  );
};

export default Footer;
