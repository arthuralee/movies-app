import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function Movies() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("/api/movies/popular")
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
      });
  }, []);

  return (
    <div>
      <MovieList movies={result} />
    </div>
  );
}
