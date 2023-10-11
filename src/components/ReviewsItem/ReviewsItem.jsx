import React from 'react'

const ReviewsItem = ({author, content}) => {
  return (
    <>
    <h3>{author}</h3>
    <p>{content}</p>
    </>
  )
}

export default ReviewsItem