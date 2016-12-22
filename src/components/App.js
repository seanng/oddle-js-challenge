import React, { Component } from 'react';
import Search from './Search';
import ResultsList from './ResultsList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> GitHub Search </h1>
        <Search />
        <ResultsList />
      </div>
    );
  }
}

export default App;
