import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/movie.css";
import { image_base_url } from "../utils/constants";

const Movie = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  console.log(movieId);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setMovieInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movie">
      {movieInfo?.poster_path && <img src={`${image_base_url}${movieInfo?.poster_path}`} alt="" />}

      <h2>Title: {movieInfo?.original_title}</h2>
      <h2>Tagline: {movieInfo?.tagline}</h2>
      <h2>Overview: {movieInfo?.overview}</h2>
      <h2>Vote Average: {movieInfo?.vote_average}</h2>
      <h2>Total Votes: {movieInfo?.vote_count}</h2>
      <h2>Status: {movieInfo?.status}</h2>
      <h2>
        IMDB Link:{" "}
        <a
          href={`https://www.imdb.com/title/${movieInfo?.imdb_id}`}
          target="_blank"
        >
          {movieInfo?.imdb_id}
        </a>
      </h2>
      <h2>Production Countries: </h2>
      <ul>
        {movieInfo?.production_countries?.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
      <h2>Genres</h2>
      <ul>
        {movieInfo?.genres?.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
      <h2>Languages</h2>
      <ul>
        {movieInfo?.spoken_languages?.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
