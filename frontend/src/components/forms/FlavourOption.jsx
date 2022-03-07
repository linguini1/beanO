import React, { useState, useEffect } from "react";
import "./FlavourOption.css";

export default function FlavourOption({
  name,
  handleChange,
  selectedFlavours,
}) {
  const colour = selectedFlavours.includes(name)
    ? "var(--secondary)"
    : "var(--tertiary)";

  return (
    <div
      className="flavour-option"
      onClick={() => handleChange(name)}
      style={{ backgroundColor: colour }}
    >
      <p>{name.toLowerCase()}</p>
    </div>
  );
}
