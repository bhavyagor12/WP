import React, { useState } from "react";
import "./Farenheit.css";
const Farenheit = () => {
  const [celcius, setCelcius] = useState(0);
  const [farenheit, setFahrenheit] = useState(0);
  const convert = (e) => {
    e.preventDefault();
    setCelcius((farenheit - 32) * 0.5556);
  };
  return (
    <div className="Farenheit">
      <div className="Container">
        <h1 className="heading">Farenheit</h1>
        <div className="Container-items">
          <div className="form">
            <form onSubmit={convert}>
              <input
                type="number"
                className="Input"
                placeholder="Farenheit value"
                value={farenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
              />
              <div className="button">
                <button type="submit">Convert</button>
              </div>
            </form>
          </div>
          <div>
            <p>Result : {celcius}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farenheit;
