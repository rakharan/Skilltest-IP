import React from "react";
const Navlink = (props) => {
  const datas = props.data;
  const navbarLink = datas.map((data, key) => (
    <a
      key={key}
      href="#"
      className={` ${
        props.mobileNavbar ? "cursor-pointer" : "cursor-default"
      } navLink px-4  items-center box-border flex text-xs font-bold mx-1 relative my-2 bg-putih h-10 rounded hover:bg-primary/50 hover:ease-in gap-2`}
    >
      <div>
        <img
          width={"16px"}
          src={data.icon}
          alt="icon"
          className="ml-2 -mr-1 flex shrink-0 box-border"
        />
      </div>
      <span className="text-base font-normal h-6 leading-6 mx-2">
        {data.title}
      </span>
    </a>
  ));
  return <div>{navbarLink}</div>;
};

export default Navlink;
