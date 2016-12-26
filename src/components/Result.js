/*jshint esversion: 6*/

import React from 'react';
import '../styles/Result.css';

const Result = ({result}) => {
  return (
    <div className="result">
      <div className="w3-card-2">
        <img src={result.avatar_url} alt="" className="avatar" />
        <div className="w3-container w3-center">
          <p><a href={result.html_url}>{result.login}</a></p>
        </div>
      </div>
    </div>
  )
}

export default Result;