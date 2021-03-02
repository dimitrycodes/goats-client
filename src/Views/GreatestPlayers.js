import React, { Component } from "react";
import './GreatestPlayers.css';

class GreatestPlayers extends Component {

  render() {
    return (
      <>
        <header role="banner">
          <h1>Greatest Players</h1>
          <h2>Yes, of all time.</h2>
        </header>
        <section>
          <header>
            <h3>Soccer</h3>
          </header>
          <ol>
            <li>Player</li>
            <li>Player</li>
            <li>Player</li>
            <li>Player</li>
            <li>Player</li>
          </ol>
        </section>
        <section>
          <header>
            <h3>Build Your Own of Greats</h3>
            <p>Create Your own List!</p>
          </header>
          <form class='signup-form'>
            <a type='button' href='/createlist'>Create List</a>
          </form>
        </section>
      </>
    );
  }
}

export default GreatestPlayers;
