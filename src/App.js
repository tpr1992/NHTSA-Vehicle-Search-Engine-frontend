import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserContainer from './containers/UserContainer'
import MainContainer from './containers/MainContainer'
import SignupForm from './components/SignupForm'
import StylingTest from './components/StylingTest.js'


class App extends Component {

  state = {
    allUsers: [],
    username: "",
    password: ""
  }


  componentDidMount() {
    this.fetchUsers()
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
    // console.log(this.state.username, this.state.password)
    this.setState({
      allUsers: [user, ...this.state.allUsers]
    })
  }

  handleSignupChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      username: "",
      password: ""
    })
    // console.log('Form submitted');
    // console.log(this.state.username, this.state.password);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(newUser => {
      // debugger
      // this.registerNewUser(newUser)
      this.setState({
        allUsers: [...this.state.allUsers, newUser]
      })
    })
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <SignupForm handleSubmit={this.handleSubmit} handleSignupChange={this.handleSignupChange} usernameValue={this.state.username} passwordValue={this.state.password} />
        <UserContainer allUsers={this.state.allUsers} />
      </div>
    )
  }
}

export default App;
