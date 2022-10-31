import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';

const Card = ({ image, title, description, popularity, release, id }) => {
  
  console.log(`https://image.tmdb.org/t/p/original/${image}`);
  const getMovieImage = () => {
    if (image) {
      return `https://image.tmdb.org/t/p/original/${image}` 
    }
    return `https://nasa-movies.netlify.app/image/gallery.png`
   }

  return (
    <div className="card">
      <Link
        to={`/movies/${id}`}
        className="chatlist-chatlink"
      >
        <img className='card__image' src={getMovieImage()}alt="" />
        <h1>{title}</h1>
        <h4>Description:</h4>
        <p>{description}</p>
        <p>Popularity: <em>{popularity}</em></p>
        <p>Release Date: <em>{release}</em></p>
      </Link>
    </div>
  );
}

export default Card;
