import React from 'react';
import movie from '../styles/movie.css';

const Movie = () => {
  return (
    <div className="movie">
      <img src="https://images.pexels.com/photos/12268516/pexels-photo-12268516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

      <h2>Title: </h2>
      <h2>Tagline: </h2>
      <h2>Overview</h2>
      <h2>Vote Average: </h2>
      <h2>Total Votes: </h2>
      <h2>Status: </h2>
      <h2>IMDB Link: </h2>

    </div>
  );
}

export default Movie;
