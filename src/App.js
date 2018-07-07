import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cards from "./cards.json";
import "./App.css";

class App extends React.Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = {
      shuffleCards: cards,
      chosen: [],
      points: 0,
    };

  }


  countPoints = id => {

    if (this.state.chosen.indexOf(id) === -1) {
      const cards = this.state.shuffleCards;
      this.shuffle(cards);
      
      this.setState(
        { 
        points: this.state.points + 1,
        shuffleCards: cards
      });

      this.state.chosen.push(id)

      console.log(this.state.chosen)
      console.log(this.state.points)
    }
    else {
      alert(`You Lost!`)
      const cards = this.state.shuffleCards;
      this.shuffle(cards);

      this.setState(
        {
          points: 0,
          chosen: [],
          shuffleCards: cards
        }
      )
    }

    // this.setState({ cards });
  };


  shuffle = shuffledCards => {
    debugger;
    let i = 0
      , j = 0
      , temp = null

    for (i = shuffledCards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = shuffledCards[i]
      shuffledCards[i] = shuffledCards[j]
      shuffledCards[j] = temp
    }
  }


  render() {
    return (
      <div>
        <Score points={this.state.points} />
        <Wrapper>


          {this.state.shuffleCards.map(shuffleCards => (
            <Cards
              countPoints={this.countPoints}
              id={shuffleCards.id}
              key={shuffleCards.id}
              image={shuffleCards.image}
              shuffle={this.shuffle}

            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
