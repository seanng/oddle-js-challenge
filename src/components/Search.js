import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchbar input-group input-group-lg">
        <input type="text" onSubmit={this.handleSubmit.bind(this)} className="form-control" placeholder="Search by Github ID" aria-describedby="sizing-addon1" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
      </div>
    );
  }

  handleSubmit(e) {
    this.props.submitQuery(e.target.value)
  }

}

export default Search;