import React, { Component } from 'react';
import Search from './Search';
import ResultsList from './ResultsList';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
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
    let wordsArray = input.split(' ')
    if (wordsArray.length > 1) {
      input = wordsArray.join('%20');
    }
    this.getResults(input);
  }

  getResults(input) {
    fetch(`https://api.github.com/search/users?q=${input}`)
    .then((response)=>{
      if (response.ok) {
        response.json().then(json=>
          this.populateResultsList(json)
        )
      } else {
        console.log('Network response was not ok.')
      }
    })
    .catch(error=>
      console.log('There was a problem with the fetch operation: ' + error.message)
    )
  }

  populateResultsList(results) {
    console.log(results)
    this.setState({
      results: results.items
    })
  }


}

export default App;
