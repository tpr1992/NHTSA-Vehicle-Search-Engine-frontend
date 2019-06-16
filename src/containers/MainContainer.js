import React from 'react'
import UserContainer from './UserContainer'


class MainContainer extends React.Component {
  render () {
    return (
      <div>
        <UserContainer allUsers={this.props.allUsers}/>
      </div>
    )

  }
}

export default UserContainer;
