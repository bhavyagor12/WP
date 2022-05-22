import React, { useState } from "react";
import "./Celcius.css";

const Celsius = () => {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const convert = (e) => {
    e.preventDefault();
    setFahrenheit((celcius * 9) / 5 + 32);
  };
  return (
    <div className="Celcius">
      <div className="Container">
        <h1 className="heading">CELSIUS</h1>
        <div className="Container-items">
          <div className="form">
            <form onSubmit={convert}>
              <input
                type="number"
                className="Input"
                placeholder="Celsius value"
                value={celcius}
                onChange={(e) => setCelcius(e.target.value)}
              />
              <div className="button">
                <button type="submit">Convert</button>
              </div>
            </form>
          </div>
          <div>
            <p>Result : {fahrenheit} °F</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celsius;
