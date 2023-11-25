import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Thumbnail({ data }) {
  const BASE_PATH = "https://image.tmdb.org/t/p/original";
  const [show, setShow] = useState(true);

  return (
    <div className="p-2 group cursor-pointer transition duration-300 md:hover:scale-110 hover:scale-105 w-full">
      <a href={`https://www.themoviedb.org/movie/${data.id}-${data.original_title}`}>
        <LazyLoadImage
          src={
            `${BASE_PATH}${data.poster_path || data.backdrop_path}` ||
            `${BASE_PATH}${data.backdrop_path}`
          }
          alt="movie poster"
          className="w-full h-auto"
          loading="lazy"
          effect="blur"
        />
      </a>
      <div className="p-3 mb-5 text-white">
        <h1 className="text-xl font-semibold">
          {data.original_title || data.title}
        </h1>
        <h2
          className={`${show ? "truncate" : ""} my-3 `}
          onClick={() => {
            setShow(!show);
          }}
        >
          {data.overview}
        </h2>
        <ul className="flex items-center gap-2 opacity-0 group-hover:opacity-100">
          <li>
            <AiOutlineLike />
          </li>
          <li>{data.vote_count}</li>
          <li className="list-disc list-inside">{data.release_date}</li>
        </ul>
      </div>
    </div>
  );
}

export default Thumbnail;
