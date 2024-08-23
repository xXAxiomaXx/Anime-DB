import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Now = () => {
  const getNowAnimes = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/seasons/now?filter=tv&limit=20&sfw"
    );
    const data = await response.json();
    return data.data;
  };

  const [nowAnimes, setNowAnimes] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getNowAnimes().then((data) => setNowAnimes(data));
    setIsloading(false);
  }, []);
  return (
    <div className="top flex flex-col bg-black border-t-2 border-zinc-900 text-white font-normal items-center h-fit pb-10">
      <div className="components mt-16 w-9/12 flex flex-col self-center border-0">
        <h2 className="text-2xl">Streaming Animes</h2>
        <hr className="mt-2.5 mb-8 w-full h-1 border-0 rounded" />
        {isLoading === true ? (
          <div role="status" className="self-center">
            <svg
              aria-hidden="true"
              class="inline w-40 h-40 text-gray-200 animate-spin dark:text-gray-600 fill-[#a816e2]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="card-components  flex flex-wrap gap-x-10 gap-y-11  items-center justify-center">
            {nowAnimes.map((anime) => (
              <Link
                to={`/anime/${anime.mal_id}`}
                key={anime.mal_id}
                className="link flex flex-col px-1 py-0 justify-between h-80 ease-in-out duration-300 hover:scale-110"
              >
                <div className="anime-cards" key={anime.mal_id}>
                  <div className="title flex flex-col justify-center">
                    <img
                      src={anime.images.webp.large_image_url}
                      className="w-44 h-60 rounded-md"
                    />
                    <h2 className="w-36 text-base tracking-tighter font-normal mt-2">
                      {anime.title_english}
                    </h2>
                  </div>
                  {/* <div className="info">
                    <p className="year text-base font-normal leading-5 opacity-70 text-[#f66518]">{anime.year}</p>
                    <p className="score text-base font-normal leading-5 opacity-70 text-[#2abdbb]">
                      Score: <span className="text-white text-lg">{anime.score}</span> /10
                    </p>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Now;
