import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PageLayout from "./parts/PageLayout";

const App = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  console.log(mobileNavbar);
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
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout
              mobileNavbar={mobileNavbar}
              setMobileNavbar={setMobileNavbar}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
