import "./dataDisplay.scss";

const iconBase = "https://openweathermap.org/img/wn/";

export default function DataDisplay({ data }) {
  const { weather, name, sys, main } = data;
  const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString();

  return (
    <>
      <div className="tempDisplay">
        <img
          src={`${iconBase}${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <h3>{Math.round(main.temp)}&#8451;</h3>
        <h3>{weather[0].description}</h3>
      </div>
      <div className="weatherDescription">
        <h1>
          {`${name}`}&nbsp;
          <img
            src={`https://flagcdn.com/${sys.country.toLowerCase()}.svg`}
            width="45"
            alt={sys.country.toLowerCase()}
          />
        </h1>
        <h1>Sunrise: {sunriseTime}</h1>
        <h1>Sunset: {sunsetTime}</h1>
        <h1>Feels like: {Math.round(main.feels_like)}&#8451;</h1>
        <h1>Humidity: {main.humidity}&#37;</h1>
        <h1>Pressure: {main.pressure}&nbsp;&#13169;</h1>
      </div>
    </>
  );
}
