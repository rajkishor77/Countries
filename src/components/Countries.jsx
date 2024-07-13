import React, { useState, useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";
import NoMatch from "./NoMatch";
import FetchFailed from "./FetchFailed";
import countries from "../assets/data/countries.json";
import SearchCountries from "./SearchCountries";
import Select from "./Select";
import getRegions from "../utils/getRegions";
import getSubregions from "../utils/getSubregion";

function Countries() {
  const [data, setData] = useState(null);
  const [currRegion, setCurrRegion] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currSubRegion, setCurrSubRegion] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    //   .then((response) => response.json())
    //   .then((jsonData) => {
    //     setShowingData(jsonData);
    //     setData(jsonData);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError(true);
    //     setIsLoading(false);
    //   });

    try {
      setTimeout(() => {
        setData(countries);
        setIsLoading(false);
      }, 200);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  }, []);

  let copyData;
  if (data) {
    copyData = [...data];

    copyData = copyData.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    );

    copyData = copyData.filter((country) =>
      country.region.toLowerCase().includes(currRegion)
    );

    copyData = copyData.filter((country) =>
      country.subregion
        ? country.subregion.toLowerCase().includes(currSubRegion)
        : true
    );

    if (sortBy === "population") {
      if (order === "ascending") {
        copyData.sort(
          (country1, country2) => country1.population - country2.population
        );
      } else if (order === "descending") {
        copyData.sort(
          (country1, country2) => country2.population - country1.population
        );
      }
    } else if (sortBy === "area") {
      if (order === "ascending") {
        copyData.sort((country1, country2) => country1.area - country2.area);
      } else if (order === "descending") {
        copyData.sort((country1, country2) => country2.area - country1.area);
      }
    }

  }

  return (
    <>
      <div className="main-section">
        <div className="filter">
          <SearchCountries
            searchText={searchText}
            setSearchText={setSearchText}
          />

          <div className="filter-box">
            <div className="region-filter">
              <Select
                mainText="Filter By Region"
                currValue={currRegion}
                setCurrValue={setCurrRegion}
                dataArray={data ? getRegions(data) : []}
                setCurrSubRegion={setCurrSubRegion}
              />
            </div>

            <div className="subregion-filter">
              <Select
                mainText="Filter By Subregion"
                currValue={currSubRegion}
                setCurrValue={setCurrSubRegion}
                dataArray={
                  data && currRegion != ""
                    ? getSubregions(data, currRegion)
                    : []
                }
                setCurrSubRegion={setCurrSubRegion}
              />
            </div>
            <div className="sort-filter">
              <Select
                mainText="Sort By"
                currValue={sortBy}
                setCurrValue={setSortBy}
                dataArray={["Population", "Area"]}
                setCurrSubRegion={setCurrSubRegion}
              />
            </div>
            <div className="order-filter">
              <Select
                mainText="Order"
                currValue={order}
                setCurrValue={setOrder}
                dataArray={["Ascending", "Descending"]}
                setCurrSubRegion={setCurrSubRegion}
              />
            </div>
            
          </div>
        </div>

        {error && <FetchFailed />}

        {isLoading && <Loading />}

        {copyData && copyData.length === 0 && <NoMatch />}

        {copyData && copyData.length > 0 && (
          <div className="countries">
            {copyData.map((country) => (
              <Country key={country.cca3} countryData={country} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Countries;
