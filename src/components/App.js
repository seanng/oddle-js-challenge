import React, { Component } from 'react';
import Search from './Search';
import ResultsList from './ResultsList';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div className="App">
        <h1> GitHub Search </h1>
        <Search submitQuery={this.submitQuery.bind(this)}/>
        <ResultsList results={this.state.results}/>
      </div>
    );
  }

  submitQuery(input) {
    // submit ajax request here.
    this.getResults(input);
  }

  getResults(input) {

  }

  populateResultsList(result) {
    this.setState({
      results: result
    })
  }


}

export default App;
