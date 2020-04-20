import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./SearchBar.css";
import { getSearchQ } from "../util";

export default function SearchBar() {
  const history = useHistory();
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    setSearchQ(getSearchQ(history));
  }, [history.location]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchQ) {
          history.push(`/search?q=${searchQ.trim()}`);
        }
      }}
      className="search-container"
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a movie"
        value={searchQ}
        onChange={(e) => setSearchQ(e.target.value)}
      />
      <input className="search-button" type="submit" value="Search" />
    </form>
  );
}
