import React from "react";
import "./CountryCard.css";

function CountryCard({ common, png }) {
  return (
    <div className="countryCard">
      <img src={png} alt={common} width={50} height={50} />
      <p>{common}</p>
    </div>
  );
}

export default CountryCard;
