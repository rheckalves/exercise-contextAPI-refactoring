import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side,
      }
    }))
  }

  render() {
    const { cars: { red, blue, yellow } } = this.state;
    const contextValue = {
      redCar: red,
      blueCar: blue,
      yellowCar: yellow,
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
