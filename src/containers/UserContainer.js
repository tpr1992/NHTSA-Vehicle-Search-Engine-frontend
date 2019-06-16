import React from 'react'
import User from '../components/User'


class UserContainer extends React.Component {

  // mapUsers = () => {
  //   return this.props.allUsers(user => {
  //     return <User user={user} />
  //   })
  // }


  render () {
    console.log(this.props.allUsers);
    return (
      this.props.allUsers.map(user => {
        return <div> <User key={user.id} user={user}/> </div>
      })
    )

  }
}

export default UserContainer;
