import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultsList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  handleSearch = searchTerm =>
    fetch('api/hn/' + searchTerm)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(searchResults => {
        this.setState({
          searchResults,
        });
      })
      .catch(function(error) {
        console.log(error);
        alert(`Error fetching results: ${error.message}`);
      });

  render() {
    return (
      <div className="app-container">
        <h3>Hello Search Hacker News</h3>
        <SearchBar handleSubmit={this.handleSearch} />
        <SearchResultList results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
