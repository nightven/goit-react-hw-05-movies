import { getMovieCredits } from 'api/api';
import ActorCard from 'components/ActorCard/ActorCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatsList, ListItem } from './Cast.styled';

const Cast = () => {
  const [castNames, setCastNames] = useState([]);
  const { movieId } = useParams();

  //   name,profile_path, character, id
  useEffect(() => {
    const getCastById = async () => {
      try {
        const cast = await getMovieCredits(movieId);
        setCastNames(cast.data.cast);
        
      } catch (error) {
        console.log(error.massage);
      }
    };

    getCastById();
  }, [movieId]);

  return (
    <CatsList>
      {castNames.map(cast => (
        <ListItem key={cast.id}>
          <ActorCard
            name={cast.name}
            profile_path={cast.profile_path}
            character={cast.character}
          />
        </ListItem>
      ))}
    </CatsList>
  );
};
export default Cast;
