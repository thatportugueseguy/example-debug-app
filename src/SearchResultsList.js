import React from 'react';

export default function SearchResultsList(props) {
  var rows = [];
  props.results.map((searchResult, index) =>
    rows.push(<SearchResult key={index} result={searchResult} />)
  );
  return <div className="list-group">{rows}</div>;
}

function SearchResult(props) {
  const { title, created_at, points, url } = props.result;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>
          {new Date(created_at).toLocaleString('en-GB').slice(0, 10)}
        </small>
      </div>
      <p className="mb-1">Points: {points}</p>
      <small className="url">{url}</small>
    </a>
  );
}
