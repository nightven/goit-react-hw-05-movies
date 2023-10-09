import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const films = ["film1", "film2", "film3", "film4", "film5"]
 const Movies = () => {
    useEffect(() =>{
        //http запит
    },[]);
  return (
    <div>
        {films.map(film =>{
            return(
                <Link key={film} to={`${film}`}>
                    {film}
                </Link>
            )
        }
        )}
    </div>
  )
}
export default Movies;