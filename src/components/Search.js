import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    return (
      <div className="searchbar input-group input-group-lg">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handleTextChange.bind(this)} type="text" className="form-control" placeholder="Search by Github ID" aria-describedby="sizing-addon1" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Go!</button>
          </span>
        </form>
      </div>
    );
  }

  handleTextChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hi', this.state.input)
    this.props.submitQuery(this.state.input)
  }

}

export default Search;