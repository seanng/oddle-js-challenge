import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchbar input-group input-group-lg">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="input" type="text" className="form-control" placeholder="Search by Github ID" aria-describedby="sizing-addon1" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Go!</button>
          </span>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitQuery(this.refs.input.value)
  }

}

export default Search;