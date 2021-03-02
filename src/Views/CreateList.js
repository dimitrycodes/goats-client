import React, { Component } from "react";
import './CreateList.css';

class CreateList extends Component {
  render() {
    return (
      <>
        <section>
          <form id="record-dream">
            <section class="form-section overview-section">
              <label for="Sport">Sport</label>
              <select type="text" name="dream-title" placeholder="Flying dream" required>
                <option>Soccer</option>
                <option>Football</option>
                <option>Basketball</option>
                <option>Hockey</option>
                <option>Baseball</option>
              </select>
            </section>
            <section class="form-section overview-section">
              <label for="dream-summary">Player's Name</label>
              <input name="dream-summary" rows="15" required />
            </section>
            <section class="hours-slept-container" class="form-section">
              <label for="hours-slept">Championships Won</label>
              <input type="number" name="hours-slept" id="hours-slept" placeholder="1" required />
              <label for="hours-slept">MVP Awards</label>
              <input type="number" name="hours-slept" id="hours-slept" placeholder="1" required />
              <label for="hours-slept">Longevity/Years Played</label>
              <input type="number" name="hours-slept" id="hours-slept" placeholder="1" required />
              <label for="hours-slept">All time Career Point</label>
              <input type="text" name="hours-slept" id="hours-slept" placeholder="1" required />
              <label for="hours-slept">All Time Career Assist</label>
              <input type="text" name="hours-slept" id="hours-slept" placeholder="1" required />
              <label for="hours-slept">Scoring Efficiency</label>
              <input type="text" name="hours-slept" id="hours-slept" placeholder="1" required />
            </section>
            <section class="button-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </>
    );
  }
}

export default CreateList;
