import React, { Component } from "react";
import './CreateList.css';
const {config} = require('../config');
//import { Redirect } from "react-router-dom";
 
class EditList extends Component {
 
  initState = {
    id: this.props.info.id,
    sports_id: this.props.info.sports_id,
    sportsname: this.props.info.sportsname,
    playername: this.props.info.playername,
    championshipswon: this.props.info.championshipswon,
    careerpointsscored: this.props.info.careerpointsscored,
    careerassistranking: this.props.info.careerassistranking,
    mvpawards: this.props.info.mvpawards,
    yearsplayed: this.props.info.yearsplayed,
    scoringefficiency:this.props.info.scoringefficiency
  }
 
  state = this.initState;
 
  handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    // window.location.reload();
    console.log("requestOptions", requestOptions);
    fetch(`${config.API_ENDPOINT}/sports`, requestOptions)
      .then(response => {
        console.log("response==========>", response)
        response.json()
        console.log("What is state", this.initState);
        //window.history.back('myplayers');
        //const updateOnSubmit = 
        this.setState(this.initState);
        this.render();
      })
      .then(data => {
        console.log("data===============>", data)
      });
      // return <Redirect to="/" />;
  }
 
  updateUser = ()=>{
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      };
      //const url = `http://localhost:8000/sports/${this.state.id}`;
      const url2 = `${config.API_ENDPOINT}/sports/${this.state.id}`;
 
      fetch(url2, requestOptions).then(res=>res.json).then(console.log);
      this.props.changePlayers(this.state);
      this.props.changeInfo(this.state);

  }
  render() {
      console.log(this.props.info)
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
              value={this.state.playername}
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
              value={(this.state.championshipswon)}
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    championshipswon: e.target.value,
                  })
                }}
              />
              </div>
 
<div className="form-section">
              <label htmlFor="hours-slept">MVP Awards</label>
              <input
              value={(this.state.mvpawards)}
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    mvpawards: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">Longevity/Years Played</label>
              <input
              value={(this.state.yearsplayed)}
                type="number"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    yearsplayed: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">All time Career Point</label>
              <input
              value={(this.state.careerpointsscored)}
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    careerpointsscored: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">All Time Career Assist</label>
              <input
              value={(this.state.careerassistranking)}
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    careerassistranking: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-section">
              <label htmlFor="hours-slept">Scoring Efficiency</label>
              <input
              value={(this.state.scoringefficiency)}
                type="text"
                name="hours-slept"
                id="hours-slept"
                required
                onChange={(e) => {
                  this.setState({
                    scoringefficiency: e.target.value,
                  })
                }}
              />
              </div>
              <div className="form-submit"> 
              <a href="/myplayer">
              <button type="submit" onClick={()=>{this.updateUser();this.props.editing();}} >Submit</button>
              </a>
              <button type="reset" onClick={()=>{this.props.editing();}}>Reset</button>
              </div>
            {/* </section> */}
          </form>
        </section>
      </>
    );
  }
};
 
export default EditList;
