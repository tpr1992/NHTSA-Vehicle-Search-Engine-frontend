import React from 'react'


class CarCard extends React.Component {


  handleLike = (car) => {
    this.props.handleLike(car)
  }
  

  makeCarCard2 = (car) => {
    return <div class="ui card" onClick={() => this.handleLike(this.props.car)}>
      <div class="content">
        <div class="center aligned header">{car.Make_Name}</div>
        <div class="center aligned description">
          <p>{car.Model_Name}</p>
        </div>
      </div>
      <div class="extra content">
        {
          this.props.loggedIn === true ?
          <div class="center aligned author">
            Like
            <div class="item-like">
              <i aria-hidden="false" class="like icon" style={{color: 'dark-red'}}></i>
            </div>
          </div>
          :
          ""
        }
      </div>
    </div>
  }

  render () {
    return (
      this.makeCarCard2(this.props.car)
    )
  }
}

export default CarCard;
