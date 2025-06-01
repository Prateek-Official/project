import "../../styles/AutocompleteSearchBar.css";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { Link } from "react-router";

const AutocompleteSearchBar = () => {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [storeSearch, setStoreSearch] = useState({});

  const fetchData = async () => {
    if (storeSearch[userInput]) {
      setResults(storeSearch[userInput]);
      return;
    }

    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + userInput
    );
    const data = await response.json();
    setResults(data.recipes);
    setStoreSearch((prev) => ({ ...prev, [userInput]: data.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timer);
  }, [userInput]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsShow(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="search-bar-container">
      <Link to="/">Back to Home</Link>
      <h1 className="search-heading">Autocomplete Search Bar</h1>

      <div className="input-container">
        <input
          type="text"
          className="search-bar"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onFocus={() => setIsShow(true)}
          onBlur={() => setIsShow(false)}
          onClick={() => setIsShow(true)}
        />

        {isShow && <SearchResults results={results} />}
      </div>
    </div>
  );
};

export default AutocompleteSearchBar;
