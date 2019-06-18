import React from 'react'


class CarCard extends React.Component {
  makeCarCard = (car) => {
    return <div>
      <div className="card">
        <div className="container">
            <h5 className="card-title">
            {
              car.Make_Name
            }
            </h5>
            <p className="card-text">
            {
              car.Model_Name
            }
            </p>
          </div>
        </div>
        <br />
      </div>
  }

  render () {
    return (
      this.makeCarCard(this.props.car)
    )
  }
  }

export default CarCard;
