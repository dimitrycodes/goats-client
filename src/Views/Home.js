import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="main ">
        <section className="main-header main-bg">
          {/* <header role="banner">
            <h1>Greatest Players in Sports</h1>
          </header> */}
          </section>
          <section className="intro">
            <p className="s-style">There is always debate in many circles regarding who is the greates player of all time in any particular sport. GOATS helps you to end the debate. You can store your favorite players according to six core statistics. Speak with stats that matter.</p>
          </section>
          <section className="container-box">
            <h3>
              <a href='/players' className="no-link">View The Top 5 Players in Each Sport</a>
            </h3>
          </section>
          <section className="container-box">
            <h3><a href='/myplayers' className="no-link"> My top 5 players in Each Sport 💪</a></h3>
          </section>
        </div>
    );
  }
}

export default Home;
