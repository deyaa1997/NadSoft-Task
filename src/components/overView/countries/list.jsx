import { useEffect, useState, useReducer } from "react";

function List({
  countryList,
  setSelectedCountry,
  selectedCountry,
  setCountryData,
}) {
  // use array to render many cards
  const [list, setList] = useState(countryList);
  const [sortBy, setSortBy] = useState("A-Z");
  function countrySearch(e) {
    setList(countryList);
    const searchValue = e.target.value.toLowerCase();
    if (searchValue) {
      const filterdData = countryList.filter((country) => {
        return country.Country.toLowerCase().includes(searchValue);
      });
      setList(filterdData);
    }
  }

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    switch (sortBy) {
      case "A-Z":
        list.sort((a, b) => {
          return a.Country.localeCompare(b.Country);
        });
        forceUpdate();
        break;
      case "Z-A":
        list.sort((a, b) => {
          return b.Country.localeCompare(a.Country);
        });
        forceUpdate();
        break;
      case "highestCases":
        list.sort((a, b) => {
          return b.TotalConfirmed - a.TotalConfirmed;
        });
        forceUpdate();
        break;
      case "lowestCases":
        list.sort((a, b) => {
          return a.TotalConfirmed - b.TotalConfirmed;
        });
        forceUpdate();
        break;
      case "highestDeaths":
        list.sort((a, b) => {
          return b.TotalDeaths - a.TotalDeaths;
        });
        forceUpdate();
        break;
      case "lowestDeaths":
        list.sort((a, b) => {
          return a.TotalDeaths - b.TotalDeaths;
        });
        forceUpdate();
        break;
      default:
        break;
    }
  }, [list, sortBy]);

  function changeSort(event) {
    setSortBy(event.target.value);
  }

  return (
    <div className="country-list box">
      <div className="country-list-header">
        <input
          type="search"
          name="countrySearch"
          id="country-search"
          className="country-search"
          placeholder="Search..."
          onChange={countrySearch}
        />
        <select name="sortBy" id="sort" onChange={changeSort}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="highestCases">Cases High to Low</option>
          <option value="lowestCases">Cases Low to High</option>
          <option value="highestDeaths">Deaths High to Low</option>
          <option value="lowestDeaths">Deaths Low to High</option>
        </select>
      </div>

      <ul className="country-navbar">
        {list.map((country) => (
          <li
            className={`country ${
              country.Country === selectedCountry ? "active-country" : ""
            }`}
            key={country.ID}
            onClick={() => {
              setSelectedCountry(country.Country);
              setCountryData(country);
            }}
          >
            {country.Country}
          </li>
        ))}
        {!list.length ? <p>No Result Found</p> : ""}
      </ul>
    </div>
  );
}

export default List;
