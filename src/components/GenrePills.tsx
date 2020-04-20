import React from "react";
import "./GenrePills.css";

export default function GenrePills({ genres }: { genres?: String[] }) {
  return (
    <div className="genre-container">
      {genres ? (
        genres.map((genre) => <div className="genre-pill">{genre}</div>)
      ) : (
        <div>No known genres</div>
      )}
    </div>
  );
}
