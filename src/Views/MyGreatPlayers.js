import React, { Component } from "react";
import './MyGreatPlayers.css';

class MyGreatPlayers extends Component {
  state = {
    sports: [{
      game: 'soccer',
      players: [
        {
          name: 'Anthony',
          championshipsWon: 1,
          careerPointsScored: 2,
          careerAssistRanking: 1,
          mvpAwards: 3,
          yearsPlayed: 10,
          scoringEfficiency: 10
        },
        {
          name: 'Chirag',
          championshipsWon: 2,
          careerPointsScored: 1,
          careerAssistRanking: 1,
          mvpAwards: 5,
          yearsPlayed: 1,
          scoringEfficiency: 3
        },
        {
          name: 'derik',
          championshipsWon: 3,
          careerPointsScored: 5,
          careerAssistRanking: 5,
          mvpAwards: 2,
          yearsPlayed: 6,
          scoringEfficiency: 6
        }
      ]
    }]
  };

  handleEdit = () => {
    // const requestOptions = {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(this.state)
    // };
    window.location.reload();
    // fetch(`${config.API_ENDPOINT}/sports`, requestOptions)
    //   .then(response => {
    //     console.log("response==========>", response)
    //     response.json()
    //   })
    //   .then(data => {
    //     console.log("data===============>", data)
    //   });
  }

  handleDelete = () => {
    // const requestOptions = {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(this.state)
    // };
    window.location.reload();
    // fetch(`${config.API_ENDPOINT}/sports`, requestOptions)
    //   .then(response => {
    //     console.log("response==========>", response)
    //     response.json()
    //   })
    //   .then(data => {
    //     console.log("data===============>", data)
    //   });
  }

  render() {
    return (
      <>
        <header role="banner">
          <h1>My List of Greats</h1>
          <section class="form-section overview-section">
            <label for="Sport">Sort By:</label>
            <select
              type="text"
              name="dream-title"
              placeholder="Flying dream"
              required
              defaultValue="Championships"
              onChange={(e) => {
                this.setState({
                  sports: [{
                    game: 'Soccer',
                    players: this.state.sports[0].players.sort(
                      (a, b) => {
                        return a[e.target.value] - b[e.target.value]
                      })
                  }],
                })
              }}
            >
              <option value='championshipsWon'>Championships</option>
              <option value='mvpAwards'>MVP Awards</option>
              <option value='yearsPlayed'>Longevity/Years Played</option>
              <option value='careerPointsScored'>All time Career Point</option>
              <option value='careerAssistRanking'>All Time Career Assist</option>
              <option value='SscoringEfficiency'>Scoring Efficiency</option>
            </select>
          </section>
        </header>
        <section>
          <header>
            <h2>Sport(Ex:{this.state.sports[0].game})</h2>
            <p>Last Updated: 01.28.2017</p>
            <ol>
              {this.state.sports[0].players.map((player) =>
                <li>{player.name}</li>
              )}
            </ol>
          </header>
          <blockquote>Why your list makes sense according to the Stats?</blockquote>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </section>
      </>
    );
  }
}

export default MyGreatPlayers;
