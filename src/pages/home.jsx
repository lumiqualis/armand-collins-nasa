import { useEffect, useState } from "react";
import "../styles/App.css";
import { base_nasa_url, base_tmdb_url } from "../utils/constants";
import { getTodayDate } from "../utils/utils";
import axios from "axios";
import Card from "../components/Card";

function Home() {
  const [landingInfo, setLandingInfo] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_nasa_url}`)
      .then((res) => {
        setLandingInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(base_tmdb_url)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <div className="header__container">
        <h1 className="app__header">
          <span>NASA:</span> Picture of the Day <br />
          {getTodayDate()}
        </h1>
      </div>
      <img src={landingInfo.url} alt="" className="landing__image" />
      <div className="app__main">
        <div className="movie__container">
          {movies.map((movie) => (
            <Card key={movie.id} id={movie.id} image={movie.poster_path} title={movie.original_title} release={movie.release_date} popularity={movie.popularity} description={movie.overview} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
