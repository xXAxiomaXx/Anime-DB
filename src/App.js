import "./App.css";
import React from "react";
import logo from "./images/logo.webp";
import neko from "./images/news_yuzu 1.webp";
import Upcoming from "./pages/Upcoming";
import Search from "./pages/Search";
import Anime from "./pages/Anime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="navbar">
          <div className="nav">
            <img src={logo} />
            <nav>
              <a href="/">Home</a>
              <a href="/upcoming">Upcoming</a>
            </nav>
          </div>
          <div className="search">
            <a href="/search">
              <i class="bx bx-search"></i>
            </a>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/search" element={<Search />} />
          <Route path="/anime/:id" element={<Anime />} />
        </Routes>
        <footer>
          <img src={neko} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
