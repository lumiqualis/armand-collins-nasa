import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css';
import { image_base_url } from '../utils/constants';

const Card = ({ image, title, description, popularity, release, id }) => {
  
  const getMovieImage = () => {
    if (image) {
      return `${image_base_url}${image}` 
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
