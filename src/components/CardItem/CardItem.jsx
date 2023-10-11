import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItem from './CardItem.styled';
// import defaultIMG from '../../images/noun-default-image-5191452.png'

const CardItem = ({id, poster_path, title}) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation()
  return (
    <ListItem>
      <Link to={`/movies/${id}`} state={{from: location}}>
        <img className='filmImg' src={`${BASE_IMG_URL}${poster_path}`} alt={title}  />
      <h2 className='title'>{title}</h2>
      </Link>
    </ListItem>
  );
};

export default CardItem;
