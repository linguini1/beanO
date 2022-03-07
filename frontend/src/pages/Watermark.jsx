import React from "react";
import "./Watermark.css";

export default function Watermark(props) {
  const watermark = () => {
    const text = [];
    for (let i = 0; i < 10; i++) {
      // Random integer between 50 and 150
      const scatter = Math.random() * 900 + 50;
      const margin = { marginLeft: `${-scatter}px` };

      text.push(<p style={margin}>{props.text.repeat(10)}</p>);
    }
    return text;
  };

  return <div className="watermark">{watermark()}</div>;
}
