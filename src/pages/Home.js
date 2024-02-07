import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const getTopAnimes = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/top/anime?filte=bypopularity&limit=20&type=tv&sfw"
    );
    const data = await response.json();
    return data.data;
  };

  const [topAnimes, setTopAnimes] = useState([]);

  useEffect(() => {
    getTopAnimes().then((data) => setTopAnimes(data));
  }, []);

  return (
    <div className="Home">
      <section className="home">
        <div>
          <h1>Welcome</h1>
          <h2>
            to <span>crunchyclone</span>
          </h2>
          <h2>Anime Database</h2>
        </div>
      </section>
      <div className="top">
        <div className="components">
          <h2>Top Animes</h2>
          <hr />
          <div className="card-components">
            {topAnimes.map((anime) => (
              <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="link">
                <div className="anime-cards" key={anime.mal_id}>
                  <div className="title">
                    <img src={anime.images.webp.large_image_url} />
                    <h2>{anime.title_english}</h2>
                  </div>
                  <div className="info">
                    <p className="year">{anime.year}</p>
                    <p className="score">
                      Score: <span>{anime.score}</span> /10
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
