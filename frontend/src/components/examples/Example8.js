import { useState } from "react";
function Example8() {
  const [car, setCar] = useState({
    brand: "Bugatti",
    model: "Veyron",
    year: "2005",
    color: "Black",
  });

  const updateColor = (a) => {
    setCar((previousState) => {
      return { ...previousState, color: a };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={() => updateColor("Black")}>
        Black
      </button>
      <button type="button" onClick={() => updateColor("White")}>
        White
      </button>
      <button type="button" onClick={() => updateColor("Pink")}>
        Pink
      </button>
    </>
  );
}

export default Example8;
