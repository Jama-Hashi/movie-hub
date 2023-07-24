import React from "react";
import Image from "next/image";
const API_KEY = process.env.API_KEY;

const fetchMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};

const Movie = async ({ params: { id } }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const result = await fetchMovie(id);

  return (
    <div className="w-11/12 md:w-4/5 mt-10 mx-auto mb-10">
      <div className="flex flex-col sm:flex-row gap-2 md:items-start">
        <div>
          <h2 className="mt-1 text-3xl text-white font-bold">
            {result.title || result.original_name}
          </h2>
          <p>{result.overview}</p>
        </div>
        <div className="my-4 rounded-md overflow-hidden">
          <Image
            width={1920}
            height={1080}
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            alt="Movie Poster"
          />
        </div>
      </div>
      <div className=" xl:-mt-20">
        <p>
          <strong className="text-fuchsia-700">Release Date: </strong>
          {result.release_date}
        </p>
        <p>
          <strong className="text-fuchsia-700">Original Title: </strong>
          {result.original_title}
        </p>
        <p>
          <strong className="text-fuchsia-700">Popularity: </strong>
          {result.popularity}
        </p>

        <p>
          <strong className="text-fuchsia-700">Votes: </strong>
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Movie;
