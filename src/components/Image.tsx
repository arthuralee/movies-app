import React from "react";
import "./Image.css";

export default function Image({
  src,
  alt,
}: {
  src?: string | null;
  alt?: string | null;
}) {
  return (
    <div className="image">
      {src != null ? (
        <img src={src} alt={alt || ""} />
      ) : (
        <div className="noimg">{alt}</div>
      )}
    </div>
  );
}
