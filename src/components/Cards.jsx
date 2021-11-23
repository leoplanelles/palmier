import { useState, useEffect } from 'react';
import axios from 'axios';
import Deck from './Deck';

function Card() {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=52',
    )
    .then((res) => setData(res.data.cards))
    }
    , []);

    return (
      <div>
        <Deck />
        {data.map(e =>
          <div>
          <h2>{e.value} OF {e.suit}</h2>
          <img src={e.image} alt={e.image}/>
          </div>)}
      </div>
      )
};

export default Card;
