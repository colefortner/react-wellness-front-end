import React, { Component } from 'react';
import axios from 'axios';

export default class AddFoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps:'', 
      cardio_minutes:'',
      stairs:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { 
      steps, 
      cardio_minutes, 
      stairs, 
      miles,
      calories
    } = this.state;

    axios
      .post("http://localhost:3001/activity",
        {
          acivity: {
            steps: steps,
            cardio_minutes: cardio_minutes,
            stairs: stairs,
            miles: miles,
            calories: calories
          },
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log('Activity response', response);
      })
      .catch(error => {
        console.log('Activity response error', error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){
    return (
      <div style={{marginTop: '100px', fontSize: '20px'}}>
              <form onSubmit = {this.handleSubmit}>
              {/* <form
                onSubmit={e => {
                  alert(JSON.stringify(e));
                  e.preventDefault();
                  // addFood(value);
                  reset();
                }}> */}
          <div>
            <label htmlFor='steps'>Steps</label>
            <input 
              type="text" 
              name="steps" 
              placeholder="Steps" 
              value={this.state.steps}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='cardio_minutes'>Cardio Minutes</label>
            <input 
              type="text" 
              name="cardio_minutes" 
              placeholder="Cardio Minutes" 
              value={this.state.cardio_minutes}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='stairs'>Stairs</label>
            <input 
              type="text" 
              name="stairs" 
              placeholder="Stairs" 
              value={this.state.stairs}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='miles'>Miles</label>
            <input 
              type="text" 
              name="miles" 
              placeholder="Miles" 
              value={this.state.miles}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='calories'>Calories</label>
            <input 
              type="text" 
              name="calories" 
              placeholder="Calories" 
              value={this.state.calories}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Add Activity</button>
        </form>
      </div>
    )
  }
}

