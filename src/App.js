import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import Footer from "./components/footer/Footer";

import { useTheme } from "./context/ThemeContext";
import routes from "./routes";

import AOS from "aos";

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { theme } = useTheme();
  const body = document.body;
  useEffect(() => {
    if (theme === "light-theme") {
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
    }
  }, [theme, body.classList]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
