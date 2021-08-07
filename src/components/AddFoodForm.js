import React, { Component } from 'react';
import axios from 'axios';

export default class AddFoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food_name:'', 
      serving_size:'',
      calories:'',
      total_fat:'',
      sat_fat:'',
      sodium:'',
      total_carbs:'',
      fiber:'',
      total_sugars:'',
      added_sugars:'',
      protein:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { 
      food_name, 
      serving_size, 
      calories, 
      total_fat, 
      sat_fat, 
      sodium, 
      total_carbs, 
      fiber, 
      total_sugars, 
      added_sugars, 
      protein 
    } = this.state;

    event.preventDefault()

    alert(`Your stuff ${food_name} ${calories}`)
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
            <label htmlFor='food_name'>Food</label>
            <input 
              type="text" 
              name="food_name" 
              placeholder="Food" 
              value={this.state.food_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='serving_size'>Serving Size</label>
            <input 
              type="text" 
              name="serving_size" 
              placeholder="Serving Size" 
              value={this.state.serving_size}
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
          <div>
            <label htmlFor='total_fat'>Total Fat</label>
            <input 
              type="text" 
              name="total_fat" 
              placeholder="Total Fat" 
              value={this.state.total_fat}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='sat_fat'>Saturated Fat</label>
            <input 
              type="text" 
              name="sat_fat" 
              placeholder="Saturated Fat" 
              value={this.state.sat_fat}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='sodium'>Sodium</label>
            <input 
              type="text" 
              name="sodium" 
              placeholder="Sodium" 
              value={this.state.sodium}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='total_carbs'>Total Carbs</label>
            <input 
              type="text" 
              name="total_carbs" 
              placeholder="Total Carbs" 
              value={this.state.total_carbs}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='fiber'>Fiber</label>
            <input 
              type="text" 
              name="fiber" 
              placeholder="Fiber" 
              value={this.state.fiber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='total_sugars'>Total Sugars</label>
            <input 
              type="text" 
              name="total_sugars" 
              placeholder="Total Sugars" 
              value={this.state.total_sugars}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='added_sugars'>Added Sugars</label>
            <input 
              type="text" 
              name="added_sugars" 
              placeholder="Added Sugars" 
              value={this.state.added_sugars}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='protein'>Protein</label>
            <input 
              type="text" 
              name="protein" 
              placeholder="Protein" 
              value={this.state.protein}
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

