import React from "react";
import "./MoviePoster.css";

export default function MoviePoster({
  src,
  alt,
}: {
  src?: string | null;
  alt?: string | null;
}) {
  return (
    <div className="movie-poster">
      {src != null ? (
        <img src={src} alt={alt || ""} />
      ) : (
        <div className="noimg">{alt}</div>
      )}
    </div>
  );
}
