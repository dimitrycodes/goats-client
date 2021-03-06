import React, { Component } from "react";
import './GreatestPlayers.css';
import config from '../config';

class GreatestPlayers extends Component {
  state = {
    sports: [{
      game: 'Football',
      players: [
        {
          name: 'Tom Brady'
        },
        {
          name: 'Lawrence Taylor'
        },
        {
          name: 'Jerry Rice'
        },
        {
          name: 'Jim Brown'
        },
        {
          name: 'Walter Payton'
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
        // if (sports.length) {
        //   console.log("")
        //this.setState({ sports })
        // }
        console.log(sports, 'this is line 24 app.js')
      })
      .catch((error) => { console.log({ error }) })
  }

  render() {
    return (
      <div className="">
      <section className="main-header">
        <header role="banner">
          <h1 className="head-title">Greatest Players</h1>
          <h2 className="head-sub-title">Yes, of all time.</h2>
        </header>
        </section>
        <section className="player">
          <header className="game-head">
            <h3 className="game-title">{this.state.sports[0].game}</h3>
          </header>
          <ol className="list">
            {this.state.sports[0].players.map((player, index) =>
              <li key={index}>{player.name}</li>
            )}
          </ol>
          <header className="list-head">
            <h3 className="list-main-head">Build Your Own of Greats</h3>
            <p className="list-sub-head">Create Your own List!</p>
            <form className='form'>
            <a href='/createlist'><button type='button' className="block-btn">Create List</button></a>
          </form>
          </header>
        </section>
      </div>
    );
  }
}

export default GreatestPlayers;
