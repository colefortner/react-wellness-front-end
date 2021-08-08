import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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
    const { classes } = this.props;

    return (
      // <div style={{marginTop: '100px', fontSize: '20px'}}>
              <form className={classes} noValidate autoComplete="off" onSubmit = {this.handleSubmit}>
              {/* <form
                onSubmit={e => {
                  alert(JSON.stringify(e));
                  e.preventDefault();
                  // addFood(value);
                  reset();
                }}> */}
          <div>
            <TextField
              id="date"
              label="date"
              color="info.dark" 
              type="date" 
              name="date" 
              placeholder="Date" 
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <TextField
              id="weight" 
              label="Weight" 
              color="info.dark"
              type="text" 
              name="weight" 
              placeholder="Weight" 
              value={this.state.weight}
              onChange={this.handleChange}
              required
              margin="normal"
            />
          </div>
          
          <div>
            <TextField
              id="unplug"
              label="Unplug"
              color="secondary"
              type="text" 
              name="unplug" 
              placeholder="Unplug" 
              value={this.state.unplug}
              onChange={this.handleChange}
              required
              margin="normal"
            />
            <TextField
              id="wake"
              label="Wake"
              color="secondary"
              type="text" 
              name="wake" 
              placeholder="Wake" 
              value={this.state.wake}
              onChange={this.handleChange}
              required
              margin="normal"
            />
            <TextField
              id="sleep"
              label="Sleep"
              color="secondary"
              type="text" 
              name="sleep" 
              placeholder="Sleep" 
              value={this.state.sleep}
              onChange={this.handleChange}
              required
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="blood_pressure1"
              label="Blood Pressure 1"
              color="secondary"
              type="text" 
              name="blood_pressure1" 
              placeholder="Blood Pressure 1" 
              value={this.state.blood_pressure1}
              onChange={this.handleChange}
              required
              margin="normal"
            />
            <TextField
              id="blood_pressure2"
              label="Blood Pressure 2"
              color="secondary"
              type="text" 
              name="blood_pressure2" 
              placeholder="Blood Pressure 2" 
              value={this.state.blood_pressure2}
              onChange={this.handleChange}
              required
              margin="normal"
            />
            <TextField
              id="blood_pressure3"
              label="Blood Pressure 3"
              color="secondary"
              type="text" 
              name="blood_pressure3" 
              placeholder="Blood Pressure 3" 
              value={this.state.blood_pressure3}
              onChange={this.handleChange}
              required
              margin="normal"
            />
          </div>
          <div>

            <TextField
              id="meditation"
              label="Meditation"
              color="secondary"
              type="text" 
              name="meditation" 
              placeholder="Meditation" 
              value={this.state.meditation}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Add</button>
        </form>
      // </div>
    )
  }
}
