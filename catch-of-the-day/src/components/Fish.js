import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    // es6 destructuring allows shorthand for setting multiple variables:
    const {image, name, desc, price, status} = this.props.details;

    // instead of having to do each one individually:

    // const image = this.props.details.image;
    // const name = this.props.details.name;
    // const description = this.props.details.desc;
    // const price = this.props.details.price;
    // const status = this.props.details.status;
    return (
      <li className="menu-fish">
        <img src={image} alt={image}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    )
  }
}

export default Fish
