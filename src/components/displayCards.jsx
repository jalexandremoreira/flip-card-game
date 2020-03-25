import React, { Component } from "react";

import { getCards } from "./../services/cards";

class DisplayCards extends Component {
  state = {
    cards: [],
    gameOver: ""
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
          } else {
            if (i.disabled !== true) i.isFlipped = false;
          }
        });
      } else {
        cards.map(i => {
          if (i.disabled !== true) i.isFlipped = false;
        });
      }
    }

    setTimeout(() => {
      this.setState({ cards });
    }, 500);
    this.isOver();
  };

  isOver = () => {
    let cards = [...this.state.cards];
    let count = 10;

    cards.map(i => {
      if (i.disabled === true) count++;
    });

    if (count === 12) {
      setTimeout(() => {
        this.setState({ cards: getCards() }, () => alert("Game Over!"));
      }, 800);
    }
  };

  checkTrue = item => {
    return item.isFlipped ? (
      <img src={item.img} alt="" className="cards card-front" />
    ) : (
      <img src="/imgs/cardBack.png" alt="" className="cards card-back" />
    );
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.gameOver}</div>
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
      </React.Fragment>
    );
  }
}

export default DisplayCards;
