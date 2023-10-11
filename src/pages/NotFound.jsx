import React from 'react'
import { Link } from 'react-router-dom';

 const NotFound = () => {
  return (
    <div>
      <p>
      Oops, something seems to have gone wrong, you can try again, or go back to the <Link to='/'>Home page</Link>
      </p>
    </div>
  )
}

export default NotFound;