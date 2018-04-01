import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  addFish = fish => {
    // 1. make copy of existing state
    const fishes = {...this.state.fishes};
    // 2. set new value(s)
    fishes[`fish${Date.now()}`] = fish; //interpolate the current time to the fish key
    // 3. Use React's setState to set new state
    this.setState({fishes}); // in es6, if your key value have the same name, you can just use one. it's equal to fishes: fishes
  }
  addSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="so so fresh" years_in_biz={100}/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        {<Order />}
        {<Inventory addFish={this.addFish} addSampleFishes={this.addSampleFishes}/>}
      </div>
    )
  }
}

export default App;
