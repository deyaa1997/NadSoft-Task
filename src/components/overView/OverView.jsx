import "./OverView.css";
import Global from "./global/Global";
import Countries from "./countries/Countries";
import { useEffect, useState } from "react";
import { getSummary } from "../../services/getSummary";

function OverView() {
  const [globalData, setGlobalData] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  async function fetchSummaryData() {
    try {
      let summary = await getSummary();
      setGlobalData(summary.Global);
      setCountriesData(summary.Countries);
    } catch (error) {
      console.log("error when fetching data");
    }
  }
  useEffect(() => {
    fetchSummaryData();
  }, []);
  return (
    <div className="over-view">
      <header className="over-view-header">
        <h3 className="over-view-header-title">Covid-19</h3>
        <p>Global Trend</p>
      </header>
      {globalData && <Global data={globalData} />}
      {countriesData.length && <Countries countries={countriesData} />}
    </div>
  );
}

export default OverView;
