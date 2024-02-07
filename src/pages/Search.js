import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animes, setAnimes] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=18&order_by=rank&sfw&type=tv`
    );
    const resData = await response.json();
    setAnimes(resData.data);
  };

  return (
    <div className="search-components">
      <div className="search-card">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Find your favorite anime"
        />
        <button onClick={handleSearch}>
          <i class="bx bx-search"></i>
        </button>
      </div>
      <div className="anime-container">
        {animes.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="link">
            <div key={anime.mal_id} className="anime-card">
              <img src={anime.images.webp.large_image_url} />
              <h2>{anime.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
