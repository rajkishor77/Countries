import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import getNativeName from "../utils/getNativeName";
import getCurrencies from "../utils/getCurrencies";
import getLanguages from "../utils/getLanguages";
import Loading from "./Loading";
import FetchFailed from "./FetchFailed";
import countries from "../assets/data/countries.json";
import getCountryFN from "../utils/getCountryFN";

function CountryDetails() {
  const params = useParams();
  const cca3 = params.cca3;

  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
    //   .then((res) => res.json())
    //   .then((jsonData) => {
    //     setIsLoading(false);
    //     setCountry(jsonData);
    //     document.title = jsonData[0].name.common;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError(true);
    //     setIsLoading(false);
    //   });

    try{
      setTimeout(() => {
        let countryData = countries.find((country) => country.cca3 === cca3);
        setCountry([{ ...countryData }]);
        setIsLoading(false);
      }, 500);
    }
    catch(error){
      setIsLoading(false);
      setError(true);
    }
  }, [cca3]);

  return (
    <>
      <div className="back-button-div">
        <button onClick={() => navigate(-1)} className="back-button">
          {" "}
          <FaArrowLeftLong /> Back
        </button>
      </div>
      {country && (
        <div className="country-details-page">
          <div className="country-flag">
            <img src={country[0].flags.svg} alt={country[0].flags.alt} />
          </div>
          <div className="country-more-details">
            <div className="country-name">
              <h2>{country[0].name.common}</h2>
            </div>
            <div className="country-details">
              <div className="row1">
                <p>
                  <span>Native Name: </span>
                  {getNativeName(country)}
                </p>
                <p>
                  <span>Population: </span>
                  {country[0].population}
                </p>
                <p>
                  <span>Region: </span>
                  {country[0].region ? country[0].region : "N/A"}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country[0].subregion ? country[0].subregion : "N/A"}
                </p>
                <p>
                  <span>Capital: </span>
                  {country[0].capital ? country[0].capital : "N/A"}
                </p>
              </div>
              <div className="row2">
                <p>
                  <span>Top Level Domain: </span>
                  {country[0].tld ? country[0].tld : "N/A"}
                </p>
                <p>
                  <span>Currencies: </span>
                  {`${getCurrencies(country)}`}
                </p>
                <p>
                  <span>Languages: </span>
                  {`${getLanguages(country)}`}
                </p>
              </div>
            </div>
            <div className="border-country-details">
              <p>Border Countries: </p>
              <div className="border-countries">
                {country[0].borders &&
                  country[0].borders.map((bCountry) => (
                    <Link
                      to={`/alpha/${bCountry}`}
                      key={bCountry}
                      className="bCountry"
                    >
                      {getCountryFN(bCountry)}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoading && <Loading />}

      {error && <FetchFailed />}
    </>
  );
}

export default CountryDetails;
