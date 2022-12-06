import React from "react";

const DesktopMenu = () => {
  const data = [
    {
      id: 1,
      href: "#",
      title: "Tentang",
    },
    {
      id: 2,
      href: "#",
      title: "Produk",
    },
    {
      id: 3,
      href: "#",
      title: "FAQ",
    },
    {
      id: 4,
      href: "#",
      title: "Events",
    },
    {
      id: 5,
      href: "#",
      title: "Partnership",
    },
  ];

  const menu = data.map((data) => (
    <a
      key={data.id}
      href={data.href}
      className={`text-[#757575] active:bg-primary active:text-white items-center flex flex-nowrap text-[16.8px] font-bold w-fit h-10 justify-center leading-8 px-4 py-2 border-[1px] border-transparent hover:border-[1px]  hover:border-primary rounded transition-all duration-300 ${
        data.id === 2 ? "hover:bg-primary hover:text-white" : "antialiased"
      }`}
    >
      {data.title}
    </a>
  ));
  return menu;
};

export default DesktopMenu;
