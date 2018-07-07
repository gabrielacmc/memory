import React from "react";

import "./Score.css";

class Score extends React.Component {

  render () {

    const { points} = this.props
    return (
      <div>
          <nav className="navbar navbar-inverse navbar-fixed-top ">

          <p className="navbar-text "> {points} Points </p> 
          <p className="navbar-text "> Gnhocchi Memory Game </p> 

          </nav>
      </div>
    )
  }
}



export default Score;