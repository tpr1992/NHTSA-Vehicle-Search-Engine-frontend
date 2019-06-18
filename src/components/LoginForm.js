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
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.state.username)
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
          fluid icon='user' iconPosition='left' id="username-input" name="username" placeholder="Enter a username..." onChange={this.handleChange} value={this.state.username} />
      <Form.Input
          fluid icon='lock' iconPosition='left' id="password-input" name="password" type="password" placeholder="Enter a password..." onChange={this.handleChange} value={this.state.password} />
      <br />
        <input class="ui secondary button" type="submit" value="Log In" />
        </Segment>
      </Form>
      <div class="ui divider" style={{height: '50vh'}}></div>

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
