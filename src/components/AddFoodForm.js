import React from 'react';

const AddFoodForm = () => {
  return (
    <div style={{marginTop: '100px', fontSize: '60px'}}>
            {/* <form onSubmit = {this.handleSubmit}> */}
            <form>

        <input 
          type="text" 
          name="food" 
          placeholder="Food" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="serving_size" 
          placeholder="Serving Size" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="calories" 
          placeholder="Calories" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="total_fat" 
          placeholder="Total Fat" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="sat_fat" 
          placeholder="Saturated Fat" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="sodium" 
          placeholder="Sodium" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="total_carbs" 
          placeholder="Total Carbs" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="fiber" 
          placeholder="Fiber" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="total_sugars" 
          placeholder="Total Sugars" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="added_sugars" 
          placeholder="Added Sugars" 
          value={''}
          // onChange={}
          required
        />

        <input 
          type="text" 
          name="protein" 
          placeholder="Protein" 
          value={''}
          // onChange={}
          required
        />

        <button type="submit">Add Food</button>
      </form>
    </div>
  )
}

export default AddFoodForm;