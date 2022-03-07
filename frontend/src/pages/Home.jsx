import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/icons/Icon";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-content-wrapper">
      <section className="homepage">
        <Icon width={230} />
        <div className="title-container">
          <h1>we cherish beans</h1>
          <h3>beans are our passion :)</h3>
        </div>
        <button className="product-button">
          <Link to="/collection">our beans</Link>
        </button>
      </section>
      <Navbar bottom={true} />
    </div>
  );
}
