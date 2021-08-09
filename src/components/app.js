import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Foods from './Foods';
import DailyData from './DailyData';
import TestDisplay from './TestDisplay';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus(){
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        // console.lot('logged in?', response);
        console.log(response.data.user)
        if(response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN'){
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user
          })
        } else if (!response.date.logged_in && this.state.loggedInStatus === 'LOGGED_IN'){
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          })
        }
      })
      .catch(error => {
        console.log('check login error', error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }


  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          <Navbar 
            userEmail={this.state.user.email}
            loggedInStatus={this.state.loggedInStatus}
            firstName={this.state.user.first_name}
          />
        </div>
          <Switch>
            <Route 
            exact 
            path={"/"}
            render={props => (
              <Home 
                {...props} 
                handleLogin={this.handleLogin} 
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus} 
              />
            )} 
            />
            <Route 
            exact 
            path={"/dashboard"} 
            render={props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} 
            />
            )} 
            
            />
            <Route
            exact
            path={"/foods"}
            render={props => (
              <Foods />
            )}
            />

            <Route
            exact
            path={"/daily_data"}
            render={props => (
              <DailyData />
            )}
            />  
            <Route path='*'><Redirect to="/" /></Route>
          </Switch>
        </BrowserRouter>
        <div>
          <TestDisplay />
        </div>
      </div>
    );
  }
}

