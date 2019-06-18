import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Divider, Image, Segment, Grid, Header, Message } from 'semantic-ui-react'




class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.passwordConfirmation) {
      this.props.createUserinDB(this.state)
    }
    else {
      alert("Password's don't match")
    }
  }


  renderV2 = () => {
    return (
      <Grid textAlign='center' style={{ height: '35vh', marginBottom: 40 }} verticalAlign='middle'>
        <div className="login1">
        <Header as='h2' color='black' textAlign='center'>
          Log In
        </Header>
      <Form size="medium" className="login-form" onSubmit={this.handleSubmit} style={{width: 422}}>
      <Segment flat>
      <Form.Input
          fluid icon='user' iconPosition='left' id="name-input" name="name" placeholder="Enter your name..." onChange={this.handleChange} value={this.state.name} />
      <Form.Input
          fluid icon='user' iconPosition='left' id="username-input" name="username" placeholder="Enter a username..." onChange={this.handleChange} value={this.state.username} />
      <Form.Input
          fluid icon='lock' iconPosition='left' id="password-input" name="password" type="password" placeholder="Enter a password..." onChange={this.handleChange} value={this.state.password} />
      <Form.Input
          fluid icon='lock' iconPosition='left' id="password-confirm-input" name="passwordConfirmation" type="password" placeholder="Confirm password..." onChange={this.handleChange} value={this.state.passwordConfirmation} />
      <br />
        <input class="ui secondary button" type="submit" value="Log In" />
        </Segment>
      </Form>
      <div class="ui divider"></div>

      </div>
      </Grid>
    )
  }


  render () {
    return (
      <div>
      {this.renderV2()}
      <br />
      </div>
    )
  }
}

export default LoginForm;
