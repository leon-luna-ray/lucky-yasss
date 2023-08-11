import React, { useState } from 'react';

const Card = ({ emoji }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card ${isFlipped ? 'flip-on-click' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flip-card-inner">
        <div className="card card-front">
          {emoji}
        </div>
        <div className="card card-back">
          {/* The content you want on the back of the card */}
          <p>Back of Card</p>
        </div>
      </div>
    </div>
  );
}
export default Card