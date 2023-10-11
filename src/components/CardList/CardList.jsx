import CardItem from 'components/CardItem/CardItem';
import React from 'react'
import List from './CardList.styled';

const CardList = ({movies}) => {

  return (
    <List>
        {movies.map(({id, poster_path, name, title}) => (  
              
       <CardItem key={id} id={id} poster_path={poster_path} title={name ?? title}/>      
      ))}
    </List>
  )
}

export default CardList;