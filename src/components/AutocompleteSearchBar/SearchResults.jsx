import React from "react";

const SearchResults = ({results}) => {
  return (
    <div className="result-container">
      {results.map((r) => (
        <span key={r.id} className="result">
          {r.name}
        </span>
      ))}
    </div>
  );
};

export default SearchResults;
