import React, { useEffect, useState } from "react";
import Top from "../components/Top";
import logo from "../images/文化-removebg-preview.webp";
import Upcoming from "../components/Upcoming";
import Banner from "../components/Banner";
import Now from "../components/Now";
import Search from "../components/Search";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [render, setRender] = useState("Top");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 50); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setTop = () => {
    setRender("Top");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const setUp = () => {
    setRender("Upcoming");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const setStream = () => {
    setRender("Streaming");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const setSearch = () => {
    setRender("Search");
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="H">
      <nav
        class={`duration-300 ease-in-out fixed z-50 w-full ${
          isScrolled ? "bg-[#23252b]" : "text-white"
        }`}
      >
        <div class="max-w-screen-xl px-5 flex flex-wrap items-center justify-between mx-auto py-2">
          <img src={logo} class="w-20" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class={` w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul class="text-3xl font-medium gap-y-4 md:gap-y-0 flex flex-col md:text-lg md:mt-2 mt-6 md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  class="block cursor-pointer text-white  rounded "
                  aria-current="page"
                  onClick={setTop}
                >
                  Top Animes
                </a>
              </li>
              <li>
                <a
                  class="block cursor-pointer text-white rounded "
                  onClick={setUp}
                >
                  Upcoming
                </a>
              </li>
              <li>
                <a
                  class="block cursor-pointer text-white rounded "
                  onClick={setStream}
                >
                  Streaming Now
                </a>
              </li>
              <li>
                <a
                  onClick={setSearch}
                  class="block cursor-pointer text-white rounded "
                >
                  <i class="bx bx-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Banner />
        {render === "Top" ? (
          <Top />
        ) : render === "Upcoming" ? (
          <Upcoming />
        ) : render === "Streaming" ? (
          <Now />
        ) : render === "Search" ? (
          <Search />
        ) : (
          <div></div>
        )}
    </div>
  );
}

export default Home;
