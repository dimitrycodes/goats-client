import React, { Component } from "react";
import './MyGreatPlayers.css';
import config from '../config';

class MyGreatPlayers extends Component {
  state = {
    sports: [{
      game: 'Soccer',
      players: [
        {
          name: 'Edson Arantes do Nascimento(Pele)',
          championshipsWon: 1,
          careerPointsScored: 2,
          careerAssistRanking: 1,
          mvpAwards: 3,
          yearsPlayed: 10,
          scoringEfficiency: 10
        },
        {
          name: 'Diego Maradona',
          championshipsWon: 2,
          careerPointsScored: 1,
          careerAssistRanking: 1,
          mvpAwards: 5,
          yearsPlayed: 1,
          scoringEfficiency: 3
        },
        {
          name: 'Johann Cruyff',
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
        this.setState({ sports })
        // }
        //console.log(sports, 'this is line 54')
      })
      .catch((error) => { console.log({ error }) })
  }


  handleEdit = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    //window.location.reload();
    fetch(`${config.API_ENDPOINT}/sports/:id`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
      })
      .then(data => {
        //once edit is clicked it brings up every player in the list in the form(use CreateList from)
        //const editView = this.state.sports.map(player => { // generate form})
        //Choose players to edit.
        //Once submit it will do an update request for everyone.
        console.log("data===============>", data)
      });
  }

  handleDelete = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    //window.location.reload();
    //currently expecting 1 that is hardcoded in CreateList for just one sport. 
    fetch(`${config.API_ENDPOINT}/sports/1`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
      })
      .then(data => {
        //update in state--> deleting current sport set to 1. Change logic to handle multiples sports.
        this.setState({
          sports: []
        })

        //update in API server
        console.log("DELETE===============>", data)
      });
  }

  render() {
    console.log("Checking Sports", this.state.sports)
    return (
      <div>
        <section role="banner" className="main-header">
        <header role="banner">
          <h1 className="head-title">My List of Greats</h1>
        </header>
        </section>

{/* SORT Button */}
        <section className="my-player">
          {/* <div className="sort-head">
            <label htmlFor="Sport">Sort By:</label>
            <select className="sort-select"
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
            </div> */}
        {/* </section>
        <section> */}
          <header>
            <h2 className="game-head">Soccer:</h2>
            <p className="game-sub-head">Last Updated: 03.07.2021</p>
            <ol className="list-item">
              {this.state.sports.map((player, index) =>
                <li key={index}>{player.playername}</li>
              )}
            </ol>
          </header>
          <div className="btn-footer">
          <blockquote>Does your list make sense according to the Stats?</blockquote>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          </div>
        </section>
      </div>
    );
  }
}

export default MyGreatPlayers;
