import React from 'react'

class User extends React.Component {

  makeUserCard = (user) => {
    return <div>
      <div className="card">
        <div className="container">
            <h5 className="card-title">
            {
              user.username
            }
            </h5>
            <p className="card-text">
            {
              user.name
            }
            </p>
          </div>
        </div>
        <br />
      </div>
  }

  render () {
    return (
      this.makeUserCard(this.props.user)
    )
  }
}

export default User
