import React, { Component } from "react";
import './CreateList.css';
import config from '../config';

class CreateList extends Component {

  state = {
    sportsname: '',
    playername: '',
    championshipsWon: '',
    careerPointsScored: '',
    careerAssistRanking: '',
    mvpAwards: '',
    yearsPlayed: '',
    scoringEfficiency: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    window.location.reload();
    fetch(`${config.API_ENDPOINT}/sports`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
      })
      .then(data => {
        console.log("data===============>", data)
      });
  }

  render() {
    return (
      <>
        <section>
          <form id="recordDream" onSubmit={this.handleSubmit} method='post'>
            <section className="form-section overview-section">
              <label htmlFor="Sport">Sport</label>
              <select
                type="text"
                name="dream-title"
                placeholder="Flying dream"
                required
                defaultValue="Soccer"
                onChange={(e) => {
                  this.setState({
                    sportsname: e.target.value,
                  })
                }}
              >
                <option value='Soccer'>Soccer</option>
                <option value='Football'>Football</option>
                <option value='Basketball'>Basketball</option>
                <option value='Hockey'>Hockey</option>
                <option value='Baseball'>Baseball</option>
              </select>
            </section>
            <section className="form-section overview-section">
              <label htmlFor="dream-summary">Player's Name</label>
              <input
                name="dream-summary"
                rows="15"
                required
                onChange={(e) => {
                  this.setState({
                    playername: e.target.value,
                  })
                }}
              />
            </section>
            <section className="hours-slept-container" className="form-section">
              <label htmlFor="hours-slept">Championships Won</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    championshipsWon: e.target.value,
                  })
                }}
              />
              <label htmlFor="hours-slept">MVP Awards</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    careerPointsScored: e.target.value,
                  })
                }}
              />
              <label htmlFor="hours-slept">Longevity/Years Played</label>
              <input
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    careerAssistRanking: e.target.value,
                  })
                }}
              />
              <label htmlFor="hours-slept">All time Career Point</label>
              <input
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    mvpAwards: e.target.value,
                  })
                }}
              />
              <label htmlFor="hours-slept">All Time Career Assist</label>
              <input
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    yearsPlayed: e.target.value,
                  })
                }}
              />
              <label htmlFor="hours-slept">Scoring Efficiency</label>
              <input
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    scoringEfficiency: e.target.value,
                  })
                }}
              />
            </section>
            <section className="button-section">
              <button type="submit" >Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </>
    );
  }
};

export default CreateList;
