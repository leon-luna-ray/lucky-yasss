import React from 'react';
import Card from '../components/Card';

const Game = () => {
  const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "🥰", "😋", "😎", "😍", "😇", "🙂", "🙃", "😺"];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledEmojis = shuffleArray([...emojis]);
  const emojiCards = shuffledEmojis.map((emoji, index) => <Card key={index} emoji={emoji} />)

  return (
    <div className='board container'>
      {emojiCards}
    </div>
  )
}

export default Game;
