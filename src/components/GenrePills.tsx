import React from "react";
import "./GenrePills.css";

export default function GenrePills({ genres }: { genres?: string[] }) {
  return (
    <div className="genre-container">
      {genres && genres.length ? (
        genres.map((genre) => (
          <div key={genre} className="genre-pill">
            {genre}
          </div>
        ))
      ) : (
        <div>No known genres</div>
      )}
    </div>
  );
}
