import React, { useState } from "react";
import Scroller from "./Scroller";
import "./BeanCollection.css";

export default function BeanCollection(props) {
  // Default at the first bean
  const [currentBean, setCurrentBean] = useState(0);
  const totalBeans = props.children.length;

  return (
    <>
      <div className="bean-collection">{props.children[currentBean]}</div>
      <Scroller
        beanID={currentBean}
        setBeanID={setCurrentBean}
        total={totalBeans}
      />
    </>
  );
}
