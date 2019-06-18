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

  showLoginForm = () => {
    console.log('Login');
    return <div>
      Hello
    <form>
    <input>
    </input>
  </form>

    </div>
  }

  render () {
    return (
      <Grid centered>
        <Header />
        <button onClick={this.showLoginForm} class="ui secondary button">Login</button>
        <button class="ui secondary button">Register</button>
        <Grid.Row centered>
          {
            this.state.loggedIn ?
            `Welcome ${this.state.currentUser.name}`
            :
            <SignupForm createUserinDB={this.createUserinDB} handleSignupChange={this.handleSignupChange} usernameValue={this.state.username} passwordValue={this.state.password} setCurrentUser={this.setCurrentUser} setLogin={this.setLogin} />
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
