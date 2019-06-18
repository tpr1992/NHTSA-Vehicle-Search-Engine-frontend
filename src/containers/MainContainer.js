import React from 'react'
import UserContainer from './UserContainer'
import CarContainer from './CarContainer'



class MainContainer extends React.Component {
  render () {
    return (
      <div>
        <UserContainer allUsers={this.props.allUsers}/>
        <CarContainer />
      </div>
    )

  }
}

export default UserContainer;
