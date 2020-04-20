import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [searchQ, setSearchQ] = useState("");
  const history = useHistory();

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
