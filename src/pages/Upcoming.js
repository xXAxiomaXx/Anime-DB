import React, { useEffect, useState } from "react";
import "./Upcoming.css";
import { Link } from "react-router-dom";

function Upcoming({ rendered }) {
  const getUpcomingAnimes = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/seasons/upcoming?filter=tv&limit=20&sfw"
    );
    const data = await response.json();
    return data.data;
  };

  const [upcomingAnimes, setUpcomingAnimes] = useState([]);

  useEffect(() => {
    getUpcomingAnimes().then((data) => setUpcomingAnimes(data));
  }, []);
  return (
    <div className="upcoming-content">
      <div className="upcoming">
        <h2>Upcoming Animes</h2>
        <hr />
        <div className="upcoming-components">
          {upcomingAnimes.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="link">
              <div className="anime-cards" key={anime.mal_id}>
                <img src={anime.images.webp.large_image_url} />
                <h2>{anime.title_english}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
