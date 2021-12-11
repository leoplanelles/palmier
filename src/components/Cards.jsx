import { useState, useEffect } from "react";
import axios from "axios";
import Deck from "./Deck";
import RulesScreen from "./RulesScreen";
import "./css/Cards.css";

function Card() {
  // const [deck, setDeck] = useState([]);
  const [cardDraw, setCardDraw] = useState([]);
  const [id, setId] = useState(null);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.data)
      .then((data) => setId(data.deck_id))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
      .then((res) => res.data)
      .then((data) => setCardDraw(data.cards));
  }, [draw]);

  return (
    <div className="cardsSection">
      <div className="board">
        <a onClick={() => setDraw(!draw)}>
          <Deck />
        </a>
        {cardDraw.map((e) => (
          <div className="cardNRules">
            <img className="cardImage" src={e.image} alt={e.image} />
            {/* <RulesScreen name={e.value +" of " + e.suit} rule={e} /> */}
          </div>
        ))}
      </div>
      {cardDraw.map((e) => (
        <div className="cardNRules">
          {/* <img className='cardImage' src={e.image} alt={e.image}/> */}
          <RulesScreen name={e.value + " of " + e.suit} rule={e} />
        </div>
      ))}
    </div>
  );
}

export default Card;
