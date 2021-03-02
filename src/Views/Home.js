import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Greatest Players in Sports</h1>
        </header>
        <section>
          <a href='/players'>View The Top 5 Players in Each Sport
          this will expand and each sport will come up</a>
        </section>
        <section>
          <a href='/myplayers'> My top 5 players in Each Sport 💪</a>
        </section>
      </>
    );
  }
}

export default Home;
