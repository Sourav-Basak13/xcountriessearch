import React, { useEffect, useMemo, useState } from "react";
import styles from "./Home.module.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import useDebounce from "../../hooks/useDebounce";

const fetchAllCountries = async () => {
  const response = await fetch(
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
  );
  const data = await response.json();

  return data;
};

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { data: debounceSearchValue, load } = useDebounce(searchValue);

  const countriesArray = useMemo(() => {
    return !!countries?.length
      ? countries?.filter((country) =>
          country?.common?.includes(debounceSearchValue)
        )
      : [];
  }, [debounceSearchValue, countries]);

  useEffect(() => {
    fetchAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.web_wrapper}>
      <div className={styles.search_input_wrapper}>
        <input
          type="text"
          name="search"
          className={styles.search_input}
          placeholder="Search for countries"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>

      <div
        className={
          !load ? styles.countries_wrapper : styles.countries_wrapper_loader
        }
      >
        {load && <p className={styles.countries_loader}>Loading........</p>}
        {!load &&
          countriesArray?.map((country) => (
            <CountryCard key={country?.common} {...country} />
          ))}
      </div>
    </div>
  );
}

export default Home;
