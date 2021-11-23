import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <ul>
                {data.map(e => 
                <p>{e.code}</p>
                <img src={e.image}><img>)}
            </ul>
        </div>
    )

}

export default Card;
