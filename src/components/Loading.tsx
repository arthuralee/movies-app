import React, { useState, useEffect } from "react";

import "./Loading.css";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(false);

  // no point showing a loading indicator if the loading
  // is really fast
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
