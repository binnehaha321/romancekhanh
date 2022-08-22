import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TopSection, BodySection, BottomSection } from "./partials";
import Footer from "./components/footer/Footer";
import routes from "./routes";

import AOS from "aos";

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <BrowserRouter>
      <TopSection />
      <BodySection />
      <div className="container">
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
      <BottomSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
