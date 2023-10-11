import React from 'react'

const ActorCard = ({name,profile_path, character}) => {
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <>
        <img src={`${BASE_IMG_URL}${profile_path}`} alt={name} />
        <h3>{name}</h3>
        <p>Character: {character}</p>
    </>
  )
}

export default ActorCard