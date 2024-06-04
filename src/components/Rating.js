import React from 'react';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';


const Rating = ({currentRating}) => {
    const [rating, setRating] = useState(currentRating || 0);
    const [hoverRating, setHoverRating] = useState(0);



    useEffect(() => {
        setRating(currentRating);
      }, [currentRating]);
    
      const handleRating = (rate) => {
        setRating(rate);
    
      };
    
  return (
    <div className="rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${rating >= star || hoverRating >= star ? 'filled' : ''}`}
        onClick={() => handleRating(star)}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
      >
        ★
      </span>
    ))}
  </div>
  )
}

export default Rating;
