import React, { Component } from "react";
import './MyGreatPlayers.css';

class MyGreatPlayers extends Component {

  render() {
    return (
      <>
        <header role="banner">
          <h1>My List of Greats</h1>
        </header>
        <section>
          <header>
            <h2>Sport(Ex:Basketball)</h2>
            <p>Last Updated: 01.28.2017</p>
            <ol>
              <li>Player</li>
              <li>Player</li>
              <li>Player</li>
              <li>Player</li>
              <li>Player</li>
            </ol>
          </header>
          <blockquote>Why your list makes sense according to the Stats?</blockquote>
          <button>Edit</button>
          <button>Delete</button>
        </section>
      </>
    );
  }
}

export default MyGreatPlayers;
