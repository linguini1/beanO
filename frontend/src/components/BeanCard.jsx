import React from "react";
import FlavourTag from "./auxiliary/FlavourTag";
import SaleTag from "./auxiliary/SaleTag";
import BeanIcon from "./icons/BeanIcon";
import "./BeanCard.css";

export default function BeanCard({ bean }) {
  const getFlavours = () => {
    const flavours = bean.flavours.map((flavour) => (
      <FlavourTag flavour={flavour.type.toLowerCase()} />
    ));
    return flavours;
  };

  return (
    <div className="bean-card drop-shadow">
      <div className="content-wrapper">
        <BeanIcon colour={bean.colour} width={100} />

        <div className="text-wrapper">
          <h1>{bean.name.toLowerCase()} bean</h1>
          <h3>${bean.price}</h3>
          <p>{bean.description.toLowerCase()}</p>
        </div>

        <div className="attributes">
          {bean.on_sale ? <SaleTag /> : ""}
          {getFlavours()}
        </div>
      </div>
    </div>
  );
}
