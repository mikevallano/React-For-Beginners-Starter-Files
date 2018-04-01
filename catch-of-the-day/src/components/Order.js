import React from 'react';

class Order extends React.Component {
  logClick = () => {
    console.log('got clicked')
  }
  render() {
    return (
      <div className="order" onClick={this.logClick}>
        Order Component
      </div>
    )
  }
}

export default Order
