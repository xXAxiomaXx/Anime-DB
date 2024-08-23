import React, { useEffect, useState } from "react";
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
    <div className="search-components min-h-screen pt-20 pb-20 bg-black border-t-2 border-zinc-900 flex flex-col justify-center items-center h-fit">
      <h1 className="text-white text-5xl self-center mb-10">Search</h1>
      <div className="search-card flex justify-center w-full mb-12">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Find your favorite anime..."
          className="w-9/12 md:w-4/12 h-12 rounded-full pl-5 pr-4 text-xl md:text-2xl bg-[#23252b] text-white focus:border-2 focus:border-solid focus:border-[#a816e2]"
        />
        <button onClick={handleSearch} className="flex items-center justify-center rounded-full px-3 ml-2.5 bg-[#a816e2] cursor-pointer active:bg-[#6f0e95] active:scale-90">
          <i class="bx bx-search text-2xl text-white"></i>
        </button>
      </div>
      <div className="anime-container flex flex-wrap gap-4 h-fit w-4/5 justify-center">
        {animes.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="link duration-300 ease-in-out hover:scale-110">
            <div key={anime.mal_id} className="anime-card flex flex-col py-4 justify-center">
              <img src={anime.images.webp.large_image_url} className="w-48 h-64 mb-1.5 rounded-md"/>
              <h2 className="text-white w-40 text-base tracking-tighter font-normal">{anime.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;