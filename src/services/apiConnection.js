const apiBase = "https://api.openweathermap.org/";
const apiKey = "64555bc1e6d8ac3073853234e29a5595";

const dataArr = [];
const weatherObj = (data) => {
  dataArr.push(data);
  return dataArr.length > 2 ? dataArr.splice(0, 2) : dataArr;
};

export default async function result(city) {
  return await fetch(`${apiBase}geo/1.0/direct?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((item) => {
      weatherObj(item[0]);

      const locationLat = item[0].lat;
      const locationLon = item[0].lon;

      return fetch(
        `${apiBase}data/2.5/weather?lat=${locationLat}&lon=${locationLon}&appid=${apiKey}&units=metric`
      );
    })
    .then((response) => response.json())
    .then((item) => weatherObj(item));
}

export async function getWeather(city) {
  const cityRes = await fetch(
    `${apiBase}geo/1.0/direct?q=${city}&appid=${apiKey}`
  );
  const cityData = await cityRes.json();
  const weatherRes = await fetch(
    `${apiBase}data/2.5/weather?lat=${cityData?.[0]?.lat}&lon=${cityData?.[0]?.lon}&appid=${apiKey}&units=metric`
  );
  const weatherData = await weatherRes.json();

  return weatherData;
}
