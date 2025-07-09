import React from "react";
import styles from "./CountryCard.module.css";

function CountryCard({ common, png }) {
  return (
    <div className={styles.countryCard}>
      <img src={png} alt={common} width={50} height={50} />
      <p>{common}</p>
    </div>
  );
}

export default CountryCard;
