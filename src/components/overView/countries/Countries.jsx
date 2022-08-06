import "./Countries.css";
import Global from "../global/Global";
import List from "./list";
import DoughnutChart from "../../charts/DoughnutChart";
import { useEffect, useState } from "react";

function Countries({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState("");
  const [showCountry, setShowCountry] = useState(true);

  useEffect(() => {
    setSelectedCountry(countries[0].Country);
    setCountryData(countries[0]);
  }, [countries]);

  useEffect(() => {
    setShowCountry(!showCountry);
  }, [selectedCountry]);
  return (
    <div className="countries-container box">
      <button
        onClick={() => setShowCountry(!showCountry)}
        className="show-button"
      >
        {showCountry ? "Hide Countries" : "Show Countries"}
      </button>

      <div className={`countries-container-left ${showCountry ? "" : "hide"}`}>
        <List
          countryList={countries}
          setSelectedCountry={setSelectedCountry}
          setCountryData={setCountryData}
          selectedCountry={selectedCountry}
        />
      </div>

      <div className="countries-container-right">
        <div className="chart-containers">
          <p>{selectedCountry}</p>
          <div style={{ width: 300, height: 300, margin: "auto" }}>
            <DoughnutChart countryData={countryData} />
          </div>
        </div>
        <Global data={countryData} />
      </div>
    </div>
  );
}

export default Countries;
