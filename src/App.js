import "./App.css";
import React, { useState, useEffect} from "react";

import logo from "./images/文化-removebg-preview.webp";
import Anime from "./pages/Anime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  

  var scrollTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  

  return (
    <BrowserRouter>
        <div className="App scroll-smooth overflow-x-hidden">

          {showButton && (
            <button
              onClick={scrollTop}
              className="bg-white px-3 py-2 duration-300 ease-in-out border-none rounded-full text-[#a816e2] font-semibold right-4 bottom-4 fixed z-50"
            >
              <i class="bx bx-chevron-up align-middle text-xl"></i>
            </button>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Anime />} />
          </Routes>
          <footer class="p-4 pt-8 nav w-full text-white">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div class="sm:flex sm:items-center sm:justify-between">
                <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={logo} class="w-4/12" />
                </a>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span class="block text-sm text-gray-500 sm:text-center">
                © 2024
                <a
                  href="https://emouradev.vercel.app/"
                  target="_blank"
                  class="hover:underline hover:text-slate-50"
                >
                  EM Dev
                </a>
                | All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
