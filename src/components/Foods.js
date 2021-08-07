import React from 'react';
import AddFoodForm from './AddFoodForm';

const Foods = () => {
  return (
    <div style={{marginTop: '100px', fontSize: '60px'}}>
      <AddFoodForm />
    </div>
  )
}

export default Foods;


// render() {
//   return (
//     <div>
//       <form onSubmit = {this.handleSubmit}>
//         <input 
//           type="email" 
//           name="email" 
//           placeholder="Email" 
//           value={this.state.email}
//           onChange={this.handleChange}
//           required
//         />

//         <input 
//           type="password" 
//           name="password" 
//           placeholder="Password" 
//           value={this.state.password}
//           onChange={this.handleChange}
//           required
//         />

//         <input 
//           type="password" 
//           name="password_confirmation" 
//           placeholder="Password confirmation" 
//           value={this.state.password_confirmation}
//           onChange={this.handleChange}
//           required
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>