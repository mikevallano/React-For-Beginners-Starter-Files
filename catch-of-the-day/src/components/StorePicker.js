import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Initial P</p>
        { /* this is a comment */ }
        <form className='store-selector'>
        <h2>Please enter a store down there now</h2>
        <input type='text' required placeholder='Store Name' />
        <button type='submit'>Visit Store</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker
