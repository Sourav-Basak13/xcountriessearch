import React from "react";
import styles from "./CountryCard.module.css";

function CountryCard({ common, png }) {
  return (
    <div className={styles.country_card_wrapper}>
      <img src={png} alt={common} width={50} height={50} />
      <p>{common}</p>
    </div>
  );
}

export default CountryCard;
