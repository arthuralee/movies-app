import React, { useState, useEffect } from "react";

import "./Loading.css";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(false);

  // only show loading indicator when its taking more than
  // a while, to prevent flashing the loading indicator
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return isVisible ? (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  ) : null;
}