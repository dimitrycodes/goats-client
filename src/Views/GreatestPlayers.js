import React, { Component } from "react";
import './GreatestPlayers.css';
import config from '../config';

class GreatestPlayers extends Component {
  state = {
    sports: [{
      game: 'Soccer',
      players: [
        {
          name: 'Anthony'
        },
        {
          name: 'Chirag'
        },
        {
          name: 'derik'
        }
      ]
    }]
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/sports`)
    ])
      .then(([sportsResponse]) => {
        if (!sportsResponse.ok) return sportsResponse.json().then(e => Promise.reject(e));
        return Promise.all([sportsResponse.json()]);
      })
      .then(([sports]) => {
        if (sports.length) {
          console.log("")
          this.setState({ sports })
        }
        console.log(sports, 'this is line 24 app.js')
      })
      .catch((error) => { console.log({ error }) })
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>Greatest Players</h1>
          <h2>Yes, of all time.</h2>
        </header>
        <section>
          <header>
            <h3>{this.state.sports[0].game}</h3>
          </header>
          <ol>
            {this.state.sports[0].players.map((player) =>
              <li>{player.name}</li>
            )}
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
