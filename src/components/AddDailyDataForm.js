import React, { Component } from 'react';
import axios from 'axios';

export default class AddDailyDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date:'',
      weight:'', 
      unplug:'',
      wake:'',
      sleep:'',
      blood_pressure1:'',
      blood_pressure2:'',
      blood_pressure3:'',
      meditation:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { 
      date, 
      weight, 
      unplug, 
      wake, 
      sleep, 
      blood_pressure1, 
      blood_pressure2, 
      blood_pressure3, 
      meditation
    } = this.state;

    axios
      .post("http://localhost:3001/daily_data",
        {
          daily_data: {
            date: date,
            weight: weight,
            unplug: unplug,
            wake: wake,
            sleep: sleep,
            blood_pressure1: blood_pressure1,
            blood_pressure2: blood_pressure2,
            blood_pressure3: blood_pressure3,
            meditation
          },
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log('Daily data', response);
      })
      .catch(error => {
        console.log('Daily data error', error);
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
      <div style={{marginTop: '100px', fontSize: '60px'}}>
              <form onSubmit = {this.handleSubmit}>
              {/* <form
                onSubmit={e => {
                  alert(JSON.stringify(e));
                  e.preventDefault();
                  // addFood(value);
                  reset();
                }}> */}
          <div>
            <label htmlFor='date'>Date</label>
            <input 
              type="date" 
              name="date" 
              placeholder="Date" 
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='weight'>Weight</label>
            <input 
              type="text" 
              name="weight" 
              placeholder="Weight" 
              value={this.state.weight}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='wake'>Wake</label>
            <input 
              type="text" 
              name="wake" 
              placeholder="Wake" 
              value={this.state.wake}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='sleep'>Sleep</label>
            <input 
              type="text" 
              name="sleep" 
              placeholder="Sleep" 
              value={this.state.sleep}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='blood_pressure1'>Blood Pressure 1</label>
            <input 
              type="text" 
              name="blood_pressure1" 
              placeholder="Blood Pressure 1" 
              value={this.state.blood_pressure1}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='blood_pressure2'>Blood Pressure 2</label>
            <input 
              type="text" 
              name="blood_pressure2" 
              placeholder="Blood Pressure 2" 
              value={this.state.blood_pressure2}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='blood_pressure3'>Blood Pressure 3</label>
            <input 
              type="text" 
              name="blood_pressure3" 
              placeholder="Blood Pressure 3" 
              value={this.state.blood_pressure3}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='meditation'>Meditation</label>
            <input 
              type="text" 
              name="meditation" 
              placeholder="Meditation" 
              value={this.state.meditation}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Add Food</button>
        </form>
      </div>
    )
  }
}
