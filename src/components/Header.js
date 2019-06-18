import React from 'react'
import Profile from './Profile'
import { Menu, Segment } from 'semantic-ui-react'


class Header extends React.Component {

  state = { activeItem: 'home' }

  handleItemClick = (event, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted style={{width: '100%'}}>
        <Menu inverted pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='My Account'
            active={activeItem === 'My Account'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Favorites'
            active={activeItem === 'Favorites'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
// <div style={{display: 'flex', marginTop: 20, marginLeft: 350}} class="ui search">
//   <div class="ui icon input" style={{height: 25}}>
//     <input placeholder="Search" value={this.state.searchTerm} onChange={this.onSearchChange} />
//     <i onClick={this.fetchCars} class="search icon"></i>
//   </div>
//   <button onClick={this.fetchCars}>Submit</button>
// </div>



export default Header;
