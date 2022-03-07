import React, { useState } from "react";
import "./Scroller.css";

export default function Scroller({ beanID, setBeanID, total }) {
  function decrement() {
    if (beanID === 0) {
      setBeanID(total - 1);
    } else {
      setBeanID((oldBeanID) => oldBeanID - 1);
    }
  }

  function increment() {
    if (beanID === total - 1) {
      setBeanID(0);
    } else {
      setBeanID((oldBeanID) => oldBeanID + 1);
    }
  }

  // Changing shadow when hovered over
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <div className="scroller">
      <div
        className={`left drop-shadow ${leftHover ? "pushed-shadow" : ""}`}
        onClick={decrement}
        onMouseEnter={() => setLeftHover(true)}
        onMouseLeave={() => setLeftHover(false)}
      >
        &#10094;
      </div>
      <div className="display drop-shadow">
        {beanID + 1}/{total}
      </div>
      <div
        className={`right drop-shadow ${rightHover ? "pushed-shadow" : ""}`}
        onClick={increment}
        onMouseEnter={() => setRightHover(true)}
        onMouseLeave={() => setRightHover(false)}
      >
        &#10095;
      </div>
    </div>
  );
}
