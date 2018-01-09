// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component  {
  constructor() {
    super();

    this.state = {
      value: 'hey!',
    };
  }

  handleChange() {
    console.log('hi!');
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
