import React, { Component } from "react";
import './CreateList.css';
import config from '../config';
import { Redirect } from "react-router-dom";

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
    // window.location.reload();
    console.log("requestOptions", requestOptions);
    fetch(`${config.API_ENDPOINT}/sports`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
        window.history.back('myplayers');
        
      })
      .then(data => {
        console.log("data===============>", data)
      });
      // return <Redirect to="/" />;
  }

  render() {
    return (
      <>
        <section className="add-player">
          <form id="recordDream" onSubmit={this.handleSubmit} className="create-form">
            <div className="form-section">
                <label htmlFor="Sport">Sport</label>
              <select
                type="text"
                name="dream-title"
                placeholder="Flying dream"
                required
                defaultValue="Soccer"
                onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({
                    sportsname: e.target.value,
                  })
                }}
              >
                <option value='Soccer'>Soccer</option>
                {/* <option value='Football'>Football</option>
                <option value='Basketball'>Basketball</option>
                <option value='Hockey'>Hockey</option>
                <option value='Baseball'>Baseball</option> */}
              </select>
            </div>
            <div className="form-section ">

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
            </div>
            <div className="form-section">
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
              </div>

<div className="form-section">
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
              </div>
              <div className="form-section">
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
              </div>
              <div className="form-section">
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
              </div>
              <div className="form-section">
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
              </div>
              <div className="form-section">
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
              </div>
              <div className="form-submit"> 
              <button type="submit" >Submit</button>
              <button type="reset">Reset</button>
              </div>
            {/* </section> */}
          </form>
        </section>
      </>
    );
  }
};

export default CreateList;
