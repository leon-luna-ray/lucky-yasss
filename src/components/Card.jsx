import React, { useMemo } from 'react';

const Card = ({ emoji, isWinner, isFlipped, onCardClick }) => {
  const cardText = useMemo(() => {
    return isWinner ? "You're a winner! YASSS!" : "Unlucky!";
  }, [isWinner]);

  return (
    <div className={`flip-card ${isFlipped ? 'flip-on-click' : ''}`} onClick={onCardClick}>
      <div className="flip-card-inner">
        <div className="card card-front">
          {emoji}
        </div>
        <div className="card card-back">
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
