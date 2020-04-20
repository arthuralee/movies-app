import React, { useState, useEffect } from "react";
import "./Backdrop.css";

export function Backdrop({ src }: { src?: string }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsImageLoaded(true);
      };
    }
  });

  return (
    <div
      className="backdrop"
      style={{ backgroundImage: `url(${src})`, opacity: isImageLoaded ? 1 : 0 }}
    />
  );
}
