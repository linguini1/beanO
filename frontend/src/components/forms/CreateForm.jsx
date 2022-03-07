import React, { useState, useEffect } from "react";
import FlavourOption from "./FlavourOption";
import BeanIcon from "../icons/BeanIcon";
import ErrorMessage from "./ErrorMessage";
import "./CreateForm.css";

export default function CreateForm() {
  // Fetching flavour options
  const [flavours, setFlavours] = useState([]);

  useEffect(() => {
    fetch("/api/flavours")
      .then((results) => results.json())
      .then((data) => setFlavours(data));
  }, []);

  // Creating form object
  const blankFields = {
    name: "",
    colour: "",
    description: "",
    price: "",
    flavours: [],
  };

  const [fields, setFields] = useState(blankFields);

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  // Handling flavour selection
  const changeSelections = (flavourName) => {
    if (fields.flavours.includes(flavourName)) {
      setFields({
        ...fields,
        flavours: fields.flavours.filter((flavour) => flavour !== flavourName),
      });
    } else {
      setFields({
        ...fields,
        flavours: [...fields.flavours, flavourName],
      });
    }
  };

  const flavourOptions = () => {
    const options = flavours.map((flavour) => (
      <FlavourOption
        key={flavour.id}
        name={flavour.type}
        handleChange={changeSelections}
        selectedFlavours={fields.flavours}
      />
    ));
    return options;
  };

  // Error checking hex code
  const hexReg = /^(?:[0-9a-fA-F]{3}){1,2}$/;
  const hexError = "invalid hex code";
  const hexCondition =
    !hexReg.test(fields.colour) || fields.colour.length !== 6;

  const [hexErrorMessage, setHexErrorMessage] = useState(<></>);

  useEffect(() => {
    if (hexCondition && fields.colour.length !== 0) {
      setHexErrorMessage(<ErrorMessage error={hexError} />);
    } else {
      setHexErrorMessage(<></>);
    }
  }, [fields.colour]);

  // Error checking price
  const [priceErrorMessage, setPriceErrorMessage] = useState(<></>);
  const priceError = "invalid price";

  const priceCondition = (strPrice) => {
    const price = parseFloat(strPrice);
    return isNaN(price) && strPrice.length !== 0;
  };

  // Check on every price change
  useEffect(() => {
    if (priceCondition(fields.price)) {
      setPriceErrorMessage(<ErrorMessage error={priceError} />);
    } else {
      setPriceErrorMessage(<></>);
    }
  }, [fields.price]);

  // Submit button indicator
  const [buttonColours, setButtonColours] = useState([
    "var(--quaternary)",
    "var(--quaternary-darker)",
  ]);

  // Current button colour
  const [buttonColour, setButtonColour] = useState({
    backgroundColor: buttonColours[0],
  });

  // Valid form condition
  const validForm =
    fields.name &&
    fields.description &&
    fields.flavours.length !== 0 &&
    !hexCondition &&
    !priceCondition(fields.price) &&
    fields.price.length !== 0;

  useEffect(() => {
    if (validForm) {
      setButtonColours(["var(--primary)", "var(--primary-darker)"]);
    } else {
      setButtonColours(["var(--quaternary)", "var(--quaternary-darker)"]);
    }
  }, [fields]);

  // Update button colour as soon as form is valid
  useEffect(() => {
    setButtonColour({ backgroundColor: buttonColours[0] });
  }, [buttonColours]);

  // On hover
  const buttonHover = () => {
    setButtonColour({ backgroundColor: buttonColours[1] });
  };

  const notButtonHover = () => {
    setButtonColour({ backgroundColor: buttonColours[0] });
  };

  // Posting data

  const [successMessage, setSuccessMessage] = useState(<></>);

  const sendData = () => {
    if (validForm) {
      // Send the data to the api
      fetch("/api/beans/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      setSuccessMessage(
        <p className="success-message">bean added successfully</p>
      );

      // Success message disappears after 6s
      setTimeout(() => {
        setSuccessMessage(<></>);
      }, 6000);

      // Reset all fields
      setFields(blankFields);
    } else {
      console.log("Sending failed");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="bean-preview">
        <BeanIcon colour={fields.colour} width={30} />
        <h3>{fields.name ? fields.name.toLowerCase() : "your"} bean</h3>
      </div>

      <div className="input-wrapper drop-shadow">
        <form className="form-body">
          <input
            id="bean-name"
            type="text"
            placeholder="name"
            name="name"
            value={fields.name}
            onChange={handleChange}
            maxLength="30"
          />

          <input
            id="bean-colour"
            type="text"
            placeholder="hex colour"
            name="colour"
            value={fields.colour}
            onChange={handleChange}
            maxLength="6"
          />

          {hexErrorMessage}

          <input
            id="bean-price"
            type="text"
            placeholder="price ($)"
            name="price"
            value={fields.price}
            onChange={handleChange}
          />

          {priceErrorMessage}

          <textarea
            name="description"
            placeholder="description"
            id="bean-desc"
            cols="30"
            rows="6"
            name="description"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </form>
        <div className="flavour-options">{flavourOptions()}</div>

        {successMessage}

        <button
          className="create-form-submit"
          onClick={sendData}
          style={buttonColour}
          onMouseEnter={buttonHover}
          onMouseLeave={notButtonHover}
        >
          send
        </button>
      </div>
    </div>
  );
}
