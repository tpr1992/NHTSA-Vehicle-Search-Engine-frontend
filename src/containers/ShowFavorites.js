import React from 'react'
import CarCard from '../components/CarCard'
import { Card } from 'semantic-ui-react'



class ShowFavorites extends React.Component {

  state = {
    active: false
  }

  render () {

    return (
      <Card.Group>
      {
        this.props.favorites.map(car => {
          return <Card>
          <div class="ui card">
          <div class="content">
          <div class="center aligned header">{car.brand}</div>
          <div class="center aligned description">
          <p>{car.model}</p>
          </div>
          </div>
          <div class="extra content">

            <div class="center aligned author">
            Liked!
            <div class="item-like">
            <i aria-hidden="false" class="red heart icon" style={{color: 'dark-red'}}></i>
            </div>
            </div>


          </div>
          </div>
          </Card>
        })
      }
      </Card.Group>
    )
  }
}

export default ShowFavorites;
