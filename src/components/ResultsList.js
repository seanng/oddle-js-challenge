import React, { Component } from 'react';
import Result from './Result';

import '../styles/ResultsList.css';

const ResultsList = ({results}) => {
  console.log('results!:', results);
  if (!results) {
    return (
      <div>
        Enter username to search on Github!
      </div>
    )
  }
  return (
    <div className="results-list">
      {results.map((result, i) => (
        <Result key={i} result={result} />
      ))}
    </div>
  )
};

export default ResultsList;