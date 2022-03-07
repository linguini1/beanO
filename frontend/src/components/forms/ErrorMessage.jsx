import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage({ error }) {
  return <p className="error-message">{error}</p>;
}
