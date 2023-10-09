import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Cast = () => {
    const {movieId} = useParams();
    useEffect(() =>{
        // http with movieID
      },[]);
    
  return (
    <div>Cast for : "{movieId}"</div>
  )
}
