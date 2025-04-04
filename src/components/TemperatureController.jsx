import React, { useEffect, useState } from "react";

const TemperatureController = ({ title, minTemper, maxTemper }) => {
  //   const getInitialTemperature = () => {
  //     const savedTemperature = localStorage.getItem(`currentTemperature${title}`);
  //     return savedTemperature ? +savedTemperature : 15;
  //   };

  //   const getInitialColor = () => {
  //     const savedColor = localStorage.getItem(`bgColor${title}`);
  //     return savedColor ? savedColor : "hvsl(120, 100%, 50%)";
  //   };

  //   const [temperature, setTemperature] = useState(getInitialTemperature);
  //   const [bgColor, setBgColor] = useState(getInitialColor);
  const [step, setStep] = useState(1);
  const [properties, setProperties] = useState({
    temperature: 15,
    bgColor: "hvsl(120, 100%, 50%)",
  });

  useEffect(() => {
    const savedOption = localStorage.getItem(`selectedOption${title}`);
    if (savedOption) {
      setStep(+savedOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`props${title}`, JSON.stringify(properties));
  }, [properties]);

  //   useEffect(() => {
  //     localStorage.setItem(`bgColor${title}`, bgColor);
  //   }, [bgColor]);

  const incrementTemperature = () => {
    let incrementDiference = maxTemper - step;

    if (properties.temperature <= incrementDiference) {
      const newTemper = properties.temperature + step;
      const colorStep = 240 - (240 / 30) * newTemper;

      setProperties({
        ...properties,
        temperature: newTemper,
        bgColor: `hsl(${colorStep}, 100%, 50%)`,
      });
      console.log(properties);
    }
  };

  const decrementTemperature = () => {
    let decrementDiference = minTemper + step;

    if (properties.temperature >= decrementDiference) {
      const newTemper = properties.temperature - step;
      const colorStep = 240 - (240 / 30) * newTemper;

      setProperties({
        ...properties,
        temperature: newTemper,
        bgColor: `hsl(${colorStep}, 100%, 50%)`,
      });
      console.log(properties);
    }
  };

  const handleRadioChange = (e) => {
    const value = +e.target.value;
    setStep(value);
    localStorage.setItem(`selectedOption${title}`, value);
  };
  return (
    <div className="controller-wrapper">
      <h1 className="controller-title">{title}</h1>
      <div className="controller-box">
        <div className="screen" style={{ backgroundColor: properties.bgColor }}>
          <p className="temperature">{properties.temperature}</p>
        </div>
        <div className="controls">
          <button onClick={decrementTemperature} className="controls-btn">
            -
          </button>
          <button onClick={incrementTemperature} className="controls-btn">
            +
          </button>
        </div>
        <div className="radio-box">
          <label>
            1&deg;
            <input
              name={`step${title}`}
              value={1}
              type="radio"
              checked={step === 1}
              onChange={handleRadioChange}
            />
          </label>
          <label>
            2&deg;
            <input
              name={`step${title}`}
              value={2}
              type="radio"
              checked={step === 2}
              onChange={handleRadioChange}
            />
          </label>
          <label>
            3&deg;
            <input
              name={`step${title}`}
              value={3}
              type="radio"
              checked={step === 3}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TemperatureController;
