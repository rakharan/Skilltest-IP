import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const data = [
    {
      id: 1,
      href: "/about",
      title: "Tentang",
    },
    {
      id: 2,
      href: "/products",
      title: "Produk",
    },
    {
      id: 3,
      href: "/faq",
      title: "FAQ",
    },
    {
      id: 4,
      href: "/events",
      title: "Events",
    },
    {
      id: 5,
      href: "/partnership",
      title: "Partnership",
    },
  ];

  const menu = data.map((data) => (
    <Link
      key={data.id}
      className={`text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 ${
        data.id === 2 ? "hover:bg-primary hover:text-white" : "antialiased"
      }`}
      to={data.href}
    >
      {data.title}
    </Link>
  ));
  return menu;
};

export default DesktopMenu;
