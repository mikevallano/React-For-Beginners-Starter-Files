import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        Inventory Component
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.addSampleFishes}>Add Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory
