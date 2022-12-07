import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const PageLayout = (props) => {
  return (
    <>
      <Navbar
        mobileNavbar={props.mobileNavbar}
        setMobileNavbar={props.setMobileNavbar}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
// const PageLayout = (props) => {
//   return (
//     <>
//     </>
//   );
// };

// export default PageLayout;
