import React from 'react'


class SignupForm extends React.Component {

  state = {
    newUsername: "",
    newPassword: ""
  }





  render () {
    return (
      <div>
        <h3 className="signup-header">
          Sign Up
        </h3>
        <div className="signup">
        <form className="signup-form" onSubmit={this.props.handleSubmit}>
          <input id="username-input" name="username" placeholder="Enter a username..." onChange={this.props.handleSignupChange} value={this.props.usernameValue} />
          <input id="password-input" name="password" placeholder="Enter a password..." onChange={this.props.handleSignupChange} value={this.props.passwordValue} />
          <input type="submit" value="Log In" />
      </form>
    </div>

      </div>
    )
  }
}

export default SignupForm;
