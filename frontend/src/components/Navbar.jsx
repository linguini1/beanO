import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ bottom }) {
  return (
    <nav className={`navbar ${bottom ? "navbar align-bottom" : ""}`}>
      <Link to="/">home</Link>
      <Link to="/collection">collection</Link>
      <Link to="/create">create</Link>
    </nav>
  );
}
