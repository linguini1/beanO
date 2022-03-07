import React, { useState, useEffect } from "react";
import BeanCard from "../components/BeanCard";
import BeanCollection from "../components/BeanCollection";
import Navbar from "../components/Navbar";
import Watermark from "./Watermark";
import "./Store.css";

export default function Store() {
  // Getting bean data from API
  const [beans, setBeans] = useState([]);

  useEffect(() => {
    fetch("/api/beans/")
      .then((results) => results.json())
      .then((data) => setBeans(data));
  }, []);

  // Making bean cards
  const beanCards = () => {
    return beans.map((bean) => <BeanCard key={bean.id} bean={bean} />);
  };

  return (
    <>
      <Watermark text={"our products "} />
      <section className="store-page">
        <Navbar />
        <div className="collection-wrapper">
          <BeanCollection>{beanCards()}</BeanCollection>
        </div>
      </section>
    </>
  );
}
