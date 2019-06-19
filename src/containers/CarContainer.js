import React from 'react'
import CarCard from '../components/CarCard'
import { Card } from 'semantic-ui-react'


class CarContainer extends React.Component {


  handleLike = (car) => {
    console.log(car.Make_Name, car.Model_Name, this.props.currentUser.id)
    fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        brand: car.Make_Name,
        model: car.Model_Name,
        user_id: this.props.currentUser.id
      })
    })
    .then(res => res.json())
    .then(data => {
    })
  }


  render () {
    let filtered = this.props.allCars.filter(car => car.Model_Name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    return (
      <Card.Group>
        {
          filtered.map(car => {
            return <Card><CarCard car={car} key={car.Model_Name} handleLike={this.handleLike} addCarToLiked={this.props.addCarToLiked} loggedIn={this.props.loggedIn} /></Card>
          })
        }
      </Card.Group>
    )
  }
}

export default CarContainer;
