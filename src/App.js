import { useCallback, useEffect, useState } from "react";
import result, { getWeather } from "./services/apiConnection";
import ipConnection from "../src/services/ipConnection";
import DataDisplay from "./components/dataDisplay/DataDisplay";
import Header from "./components/header/Header";
import "./styles.scss";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const { city } = await ipConnection();
    const weatherData = await getWeather(city);
    setData(weatherData);
  }, []);

  return (
    <div className="app">
      <Header setData={setData} />
      {data ? <DataDisplay data={data} /> : <h1>LOADING...</h1>}
    </div>
  );
}
