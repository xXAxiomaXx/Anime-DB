import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/文化-removebg-preview.webp";

const Anime = () => {
  const { id } = useParams();
  const [animes, setAnimes] = useState({});
  const [characters, setCharacters] = useState([]);

  const { images, aired, trailer } = animes;

  const getAnime = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    setAnimes(data.data);
  };

  const getCharacters = async (animes) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${animes}/characters`
    );
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <div className="background flex flex-col justify-center items-center bg-black">
      <nav class=" z-50 w-full ">
        <div class="w-screen md:mb-10 flex items-center justify-between mx-auto py-2">
          <img src={logo} class="w-28" />
          <div class=" w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium justify-end md:px-10 px-3 flex flex-row items-center text-lg mt-1 md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="/"
                  class="block text-white rounded text-xl"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="animes-content items-center pt-20 w-full md:w-4/5 flex flex-col bg-[#23252b] border-2 border-zinc-700 shadow-sm shadow-zinc-950 rounded-md h-fit pb-8">
        <div className="card flex flex-col items-center h-fit">
          <img
            src={images?.webp.large_image_url}
            className="h-auto w-10/12 mb-5 rounded-md"
          />
          <h1 className="text-[#a816e2] mb-2.5 text-center font-bold text-3xl">
            {animes.title_english}
          </h1>
        </div>
        <p className="text-[#04ABCA] w-10/12 self-center text-center text-lg font-normal">
          Synopsis:{" "}
          <span className="text-white text-base">{animes.synopsis}</span>
        </p>
        <div className="flex flex-col justify-center w-11/12 self-center pt-5 pb-2.5 mb-8">
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-calendar"></i> Aired:{" "}
            <span className="text-white opacity-70">{aired?.string}</span>
          </p>
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-line-chart"></i> Rank:{" "}
            <span className="text-white opacity-70">{animes.rank}</span>
          </p>
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-star"></i> Score:{" "}
            <span className="text-white opacity-70">{animes.score}</span>/10
          </p>
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-like"></i> Popularity:{" "}
            <span className="text-white opacity-70">{animes.popularity}</span>
          </p>
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-tv"></i> Status:{" "}
            <span className="text-white opacity-70">{animes.status}</span>
          </p>
          <p className="self-start px-5 text-[#04ABCA] w-fit font-normal text-2xl">
            <i class="bx bx-time"></i> Duration:{" "}
            <span className="text-white opacity-70">{animes.duration}</span>
          </p>
        </div>
        <iframe
          // width="760"
          // height="515"
          src={trailer?.embed_url}
          title="Youtube Player"
          frameborder="0"
          allowFullScreen
          className="mb-10"
        />
        <div className="characters w-10/12 h-fit">
          <h2 className="text-white font-bold text-2xl">Characters</h2>
          <hr className="mt-2.5 mb-8 w-full h-1 border-0 rounded" />
          <div className="charcard py-1 flex flex-row flex-wrap justify-center gap-11 w-full">
            {characters.map((character) => {
              const { role } = character;
              const { images, name } = character.character;
              return (
                <Link>
                  <div className="char text-white flex flex-col justify-center cursor-default">
                    <img
                      src={images?.webp.image_url}
                      className="w-48 h-auto"
                      alt=""
                    />
                    <h4 className="mt-2.5">{name}</h4>
                    <p className="text-base text-[#a816e2]">{role}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Anime;
