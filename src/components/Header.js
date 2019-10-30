import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Header extends React.Component {

  state = {
    activeItem: 'home'
  }

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

export default Header;
