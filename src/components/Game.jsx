import React, { useState } from 'react';
import Card from '../components/Card';
import { shuffleArray, generateWinnerArray } from '../utils/logic';

const Game = () => {
  const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "🥰", "😋", "😎", "😍", "😇", "🙂", "🙃", "😺"];
  // const shuffledEmojis = shuffleArray([...emojis]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [winnerArray, setWinnerArray] = useState(generateWinnerArray(emojis.length));

const handleCardClick = (index) => {
    setFlippedIndices(prevIndices => [...prevIndices, index]);

    if (winnerArray[index]) {
      setTimeout(() => {
        setFlippedIndices([]);

        setTimeout(() => {
          setWinnerArray(generateWinnerArray(emojis.length));
        }, 600);

      }, 500);
    }
};

  const emojiCards = emojis.map((emoji, index) => (
    <Card
      key={index}
      emoji={emoji}
      isWinner={winnerArray[index]}
      isFlipped={flippedIndices.includes(index)}
      onCardClick={() => handleCardClick(index)}
    />
  ));

  return (
    <div className='board container'>
      {emojiCards}
    </div>
  )
}

export default Game;
