import React, { Component } from "react";

export default class Thirdpage extends Component {
  render() {
    return (
      <>
        <h1 className="heading">Result</h1>
        <div className="result">
          <h3 className="status">You need more Practice</h3>
          <h2 className="score">Your score is 20%</h2>
          <div className="score-container">
            <div>
              <p>Total number of questions</p>
              <p>Number of attempted questions</p>
              <p>Number of correct answers</p>
              <p>Number of wrong answers</p>
            </div>
            <div>
              <p>12</p>
              <p>9</p>
              <p>3</p>
              <p>6</p>
            </div>
          </div>
          <button className="play Again">Play Again</button>
          <button className="play home">Back to home</button>
        </div>
      </>
    );
  }
}
