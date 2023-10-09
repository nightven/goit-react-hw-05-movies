import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Reviews = () => {
    const {movieId} = useParams();
    useEffect(() =>{
        // http with movieID
      },[]);
  return (
    <div>Reviews for "{movieId}"</div>
  )
}
