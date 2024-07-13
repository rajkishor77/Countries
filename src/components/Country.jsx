import React from "react";
import { Link } from "react-router-dom";

function Country({ countryData: country }) {
  return (
      <Link to={`alpha/${country.cca3}`} className="country-card">
        <img src={country.flags.png} alt={country.flags.alt} />
        <div className="country-card-details">
          <h2>{country.name.common}</h2>
          <p>
            <span>Population: </span> {country.population}
          </p>
          <p>
            <span>Region: </span> {country.region}
          </p>
          <p>
            <span>Capital: </span> {country.capital ? country.capital : "N/A"}
          </p>
        </div>
    </Link>
  );
}

export default Country;
