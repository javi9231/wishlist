import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay Gym', done: true },
  { text: 'Go to gym', done: false },
];
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput
        onNewWish={wish => {
          const findWishInWishes = wishes.find(w => w.text === wish.text);
          if (!findWishInWishes) {
            setWishes([wish, ...wishes]);
          } else {
            alert(`Deseo repetido\n ${findWishInWishes.text}`);
          }
          console.log(findWishInWishes);
        }}
      />
      <WishList wishes={wishes} onWishesChange={setWishes} />
      <button
        className="wish-clear"
        type="button"
        onClick={() => setWishes(wishes.filter(wish => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
};

export default App;
