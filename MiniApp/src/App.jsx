import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Partnership from "./pages/Partnership";
import Pokemon from "./pages/Pokemon";
import PageLayout from "./parts/PageLayout";

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
          <Route path="partnership" element={<Partnership />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
