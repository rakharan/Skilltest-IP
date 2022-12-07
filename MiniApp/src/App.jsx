import React, { useState } from "react";
import Footer from "./parts/Footer";
import MainContent from "./parts/MainContent";
import Navbar from "./parts/Navbar";

const App = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  var ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const cr = entry.contentRect;
      if (cr.width >= 1024) {
        setMobileNavbar(false);
      }
    }
  });
  const window = document.getElementById("root");
  ro.observe(window);

  return (
    <>
      <Navbar isMobileNavbar={mobileNavbar} setMobileNavbar={setMobileNavbar} />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
