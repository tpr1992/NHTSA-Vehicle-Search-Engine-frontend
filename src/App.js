import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import UserContainer from './containers/UserContainer'
import MainContainer from './containers/MainContainer'
import CarContainer from './containers/CarContainer'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'

import Profile from './components/Profile'
import Header from './components/Header'

import { Button, Checkbox, Form } from 'semantic-ui-react'



class App extends Component {

  state = {
    allUsers: [],
    username: "",
    password: "",
    currentUser: null,
    loggedIn: false,
    searchTerm: "ferrari",
    allCars: [],
    filteredCars: [],
    loading: true
  }


  componentDidMount() {
    this.fetchUsers()
    this.fetchCars()
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(allUsers => {
      this.setState({
        allUsers: allUsers
      })
    })
  }


  registerNewUser = (user) => {
    this.setState({
      allUsers: [user, ...this.state.allUsers]
    })
  }

  handleSignupChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  createUserinDB = (user) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        password: user.password
      })
    })
    .then(res => res.json())
    .then(newUser => {
      this.setState({
        currentUser: newUser,
        allUsers: [...this.state.allUsers, newUser],
        loggedIn: !this.state.loggedIn
      })
    })
  }

  setLogin = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: !this.state.loggedIn
    })
    localStorage.clear()
  }

  setCurrentUser = () => {
    let currentUser = localStorage.getItem('user_id')
    console.log(currentUser, 'is logged in');
    this.setState({
      currentUser: currentUser
    })
  }

  filterCarCards = () => {
    return this.state.allCars.map(car => {
      if (car.Model_Name.toLowerCase().includes(this.props.searchTerm)) {
        return car
      }
    })
  }

  fetchCars = () => {
    let searchTerm = this.state.searchTerm
    this.setState({
      loading: true
    })
    // fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/ferrari?format=json`)
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${searchTerm}?format=json`)
    .then(res => res.json())
    .then(allCars => {
      this.setState({
        allCars: allCars.Results,
        filteredCars: allCars.Results,
        searchTerm: "",
        loading: false
      })
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleLogin = (input) => {
    console.log(input, "Input");
    this.setState({
      username: input
    })
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
      return data.filter(user => {
        return user.username === input &&
        this.setState({
          currentUser: user,
          loggedIn: true,
          username: ""
        })
      })
    })
  }

  logout = () => {
    // localStorage.removeItem('logged_in')
    this.setState({
      currentUser: null,
      loggedIn: !this.state.loggedIn
    })
  }

  // <button onClick={this.showLoginForm} class="ui secondary button">Login</button>
  // <button class="ui secondary button">Register</button>

  render () {
    return (
      <Grid centered>
        <Header />
        <Grid.Row>
          {
            this.state.loggedIn ?
            <div>
            <h2 class="capitalize">Welcome {this.state.currentUser.name}!</h2>
            <br />
            <button onClick={this.logout} class="ui secondary button">Logout</button>
            </div>
            :
            <Grid>
              <Grid.Row>
                <SignupForm createUserinDB={this.createUserinDB} handleSignupChange={this.handleSignupChange} usernameValue={this.state.username} passwordValue={this.state.password} setCurrentUser={this.setCurrentUser} setLogin={this.setLogin} />
                <Grid.Column>
                  <h2>OR</h2>
                </Grid.Column>
                <LoginForm username={this.state.username} handleLogin={this.handleLogin} />
              </Grid.Row>
            </Grid>
          }
        </Grid.Row>
        <Grid.Row>

          <Form>
            <div class="ui search">
              <div class="ui icon input">
                <input placeholder="Search" value={this.state.searchTerm} onChange={this.onSearchChange} />
              </div>
              <button class="ui icon button" onClick={this.fetchCars}><i aria-hidden="true" class="search icon"></i></button>
            </div>
            {
              this.state.loading ?
              <div  style={{marginTop: 40, marginRight: 10, padding: 15}} class="ui active inline loader"></div>
              :
              ""
          }
          </Form>
        </Grid.Row>
        <CarContainer filteredCars={this.state.filteredCars} allCars={this.state.allCars}  searchTerm={this.state.searchTerm} />
      </Grid>
    )
  }
}

// <UserContainer allUsers={this.state.allUsers} />
export default App;
