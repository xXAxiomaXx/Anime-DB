import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Anime.css";
import { Link } from "react-router-dom";

const Anime = () => {
  const { id } = useParams();
  const [animes, setAnimes] = useState({});
  const [characters, setCharacters] = useState([]);

  const { images, aired } = animes;

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
    <div className="background">
      <section className="animes-content">
        <div className="card">
          <img src={images?.webp.large_image_url} />
          <h1>{animes.title_english}</h1>
        </div>
        <p>Synopsis:{animes.synopsis}</p>
        <div>
          <p>
            <i class="bx bx-calendar"></i> Aired: <span>{aired?.string}</span>
          </p>
          <p>
            <i class="bx bx-line-chart"></i> Rank: <span>{animes.rank}</span>
          </p>
          <p>
            <i class="bx bx-star"></i> Score: <span>{animes.score}</span>/10
          </p>
          <p>
            <i class="bx bx-like"></i> Popularity:{" "}
            <span>{animes.popularity}</span>
          </p>
          <p>
            <i class="bx bx-tv"></i> Status: <span>{animes.status}</span>
          </p>
          <p>
            <i class="bx bx-time"></i> Duration: <span>{animes.duration}</span>
          </p>
        </div>
        <div className="characters">
          <h2>Characters</h2>
          <hr />
          <div className="charcard">
            {characters.map((character) => {
              const {role} = character
              const { images, name } = character.character;
              return ( <Link>
                <div className="char">
                  <img src={images?.webp.image_url} alt="" />
                  <h4>{name}</h4>
                  <p>{role}</p>
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
