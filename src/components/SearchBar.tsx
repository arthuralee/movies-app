import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
        history.push(`/search?q=${searchQ}`);
      }}
    >
      <input
        type="text"
        placeholder="search"
        value={searchQ}
        onChange={(e) => setSearchQ(e.target.value)}
      />
    </form>
  );
}
