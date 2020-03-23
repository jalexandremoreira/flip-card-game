import React, { Component } from "react";

import { getCards } from "./../services/cards";

class DisplayCards extends Component {
  state = {
    cards: [],
    matched: []
  };

  componentDidMount() {
    this.setState({ cards: getCards() });
  }

  handleFlip = item => {
    const cards = [...this.state.cards];

    cards.map(i => {
      if (i.id === item.id && i.disabled !== true) {
        i.isFlipped = !item.isFlipped;
      }
    });

    this.setState({ cards }, () => this.checkPair());
  };

  checkPair = () => {
    const cards = [...this.state.cards];
    const flipped = this.state.cards.filter(
      item => item.isFlipped && item.disabled !== true
    );

    if (flipped.length >= 2) {
      if (flipped[0].name === flipped[1].name) {
        cards.map(i => {
          if (i.name === flipped[0].name || i.name === flipped[1].name) {
            i.disabled = true;
            i.img = "/imgs/cardCheck.png";

            this.isOver(i);
          } else {
            if (i.disabled !== true) i.isFlipped = false;
          }
        });
        this.resetGame(cards, 400);
      } else {
        cards.map(i => {
          if (i.disabled !== true) i.isFlipped = false;
        });
        this.resetGame(cards, 500);
      }
    }
  };

  resetGame = (state, time) => {
    setTimeout(() => {
      this.setState({ cards: state });
    }, time);
  };

  isOver = item => {
    const matched = [...this.state.matched];

    if (matched.length === 0) {
      matched.push(item);
      console.log(matched);
    } else if (matched.length >= 1) {
      matched.map(i => {
        if (i.id !== item.id) {
          matched.push(item);
          console.log(i);
        }
      });
    } else if (matched.length === this.state.cards.length) {
      this.resetGame(getCards(), 1000);
    }
    this.setState({ matched });
  };

  checkTrue = item => {
    return item.isFlipped ? (
      <img src={item.img} alt="" className="cards" />
    ) : (
      <img src="/imgs/cardBack.png" alt="" className="cards" />
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row card-container">
          {this.state.cards.map((item, index) => (
            <div
              className="col-sm-4 cards-div"
              onClick={() => this.handleFlip(item)}
              key={index}
              disabled={item.disabled}
            >
              {this.checkTrue(item)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayCards;
