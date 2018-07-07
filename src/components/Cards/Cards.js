import React from "react";

import "./Cards.css";

class Cards extends React.Component {

  render () {

    const { image, id, countPoints } = this.props
    return (
      <div className="card" onClick={() => countPoints(id)}>
        <div className="img-container">
          <img alt = "Gnocchi" src={image} />
        </div>
      </div>
    )
  }
}


export default Cards;