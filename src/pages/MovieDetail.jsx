import React, { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';

 const MovieDetail = () => {
  const {movieId} = useParams()
  console.log(movieId)
  useEffect(() =>{
    // http with movieID
  },[]);
  return (
    <div>MovieDetail: "{movieId}"
    <ul>
      <li><Link to={"cast"}>Cast</Link></li>
      <li><Link to={"reviews"}>Reviews</Link></li>
    </ul>
    <Outlet/>
    </div>
  )
}
export default MovieDetail;