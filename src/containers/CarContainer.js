import React from 'react'
import CarCard from '../components/CarCard'
import { Grid, Card } from 'semantic-ui-react'



class CarContainer extends React.Component {


  render () {
    let filtered = this.props.allCars.filter(car => car.Model_Name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    return (
      <div className="car-cards">
        <Card.Group>
      {
        filtered.map(car => {
          return <Card><CarCard car={car} key={car.id} /></Card>
        })
      }
      </Card.Group>
      </div>
    )
  }
}

export default CarContainer;
