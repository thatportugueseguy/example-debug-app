import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const text = event.target.text.value;
    this.props.handleSubmit(text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          className="form-control"
          type="text"
          placeholder="Type search term and press ENTER"
        />
      </form>
    );
  }
}
